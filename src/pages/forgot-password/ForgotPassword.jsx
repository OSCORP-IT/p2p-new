import SideBg from "../../assets/logInBg.jpeg";
import Logo from "../../assets/BlackLogo.png";
import { useNavigate } from "react-router-dom";
import { RiEyeCloseLine, RiEyeLine, RiLockPasswordLine } from "react-icons/ri";
import { BiEnvelope } from "react-icons/bi";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import { PiPhoneCall } from "react-icons/pi";
import { useSelector } from "react-redux";
import { TiTicket } from "react-icons/ti";
import { RxTokens } from "react-icons/rx";
import {
  clientTypeResetPassword,
  clientTypeSendToken,
} from "../../services/forgotPassword";
import SmallText from "../../components/SmallText";
import { useEffect, useState } from "react";

function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    if (user.isLoggedIn) {
      navigate("/");
    }
  }, [user.isLoggedIn, navigate]);
  const [retry, setRetry] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [accountType, setAccountType] = useState("");
  const [floatingNote, setFloatingNote] = useState({ state: false, msg: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  async function handleMailSubmit(e) {
    e.preventDefault();
    setRetry(true);
    if (accountType === "loan") {
      try {
        const data = await clientTypeSendToken(email);
        if (data.success) {
          setSubmitted(true);
          setRetry(false);
        }
      } catch (err) {
        setFloatingNote({ state: true, msg: err.message });
        setTimeout(() => {
          setFloatingNote({ state: false, msg: null });
        }, 3000);
        setRetry(false);
      }
    }
  }
  async function handlePasswordReset(e) {
    e.preventDefault();
    if (accountType === "loan") {
      try {
        const data = await clientTypeResetPassword(
          token,
          password,
          confirmPassword
        );
        if (data.success) {
          setFloatingNote({ state: true, msg: data.message, flag: "success" });
          setRetry(false);
          setTimeout(() => {
            navigate("/auth/login");
          }, 1500);
        }
      } catch (err) {
        setFloatingNote({ state: true, msg: err.message });
        setTimeout(() => {
          setFloatingNote({ state: false, msg: null });
        }, 3000);
        setRetry(false);
      }
    }
  }

  return (
    <div className="sm:h-screen w-full flex items-center">
      <div className="w-full px-4 sm:px-0 sm:w-[60%] h-full">
        <div className="flex  h-[85%] w-full items-center">
          <div className="w-full pt-2">
            <img
              src={Logo}
              alt="logo"
              className="w-max m-auto cursor-pointer"
              onClick={() => navigate("/")}
            />
            <SubTitle
              align={`text-center`}
              font={`bold font-poppins`}
              padding={`pt-[10px] tab:pt-[20px] pb-2`}
            >
              Reset your Password
              <span className="text-accent text-[32px] sm:text-5xl tab:text-6xl">
                .
              </span>
            </SubTitle>
            {!submitted && (
              <form onSubmit={handleMailSubmit}>
                <div className="relative my-2 m-auto rounded-md border border-dashed w-full sm:w-3/4 tab:w-1/2 border-gray-400 flex items-center gap-2">
                  <div className="absolute left-2 top-[30%] w-max">
                    <BiEnvelope className="text-xl" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="py-3 pr-3 pl-8 w-full rounded-md"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative my-2 m-auto rounded-md border border-dashed w-full sm:w-3/4 tab:w-1/2 border-gray-400 flex items-center gap-2">
                  <div className="absolute left-2 top-[30%] w-max">
                    <RxTokens className="text-xl" />
                  </div>
                  <select
                    name="type"
                    id="type"
                    required
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="py-3 pr-3 pl-8 w-full rounded-md text-textColor3"
                  >
                    <option value="">Select Acount Type</option>
                    <option value="loan">Loan</option>
                    <option value="invest">Investment</option>
                  </select>
                </div>
                <div className="pt-2 w-max m-auto">
                  <button
                    type="submit"
                    className={`bg-gradient-to-r from-[#0D5152] to-[#1DB6B8] uppercase text-white tab:text-xl font-bold tracking-[4px]  py-2.5 px-[80px] rounded-[10px]`}
                  >
                    Send Token
                  </button>
                </div>
              </form>
            )}
            {submitted && (
              <form onSubmit={handlePasswordReset}>
                {!retry && (
                  <Text align={`text-center`}>
                    Insert the token that sent to <strong>{email}</strong>
                  </Text>
                )}
                {retry && (
                  <Text align={`text-center`}>Sending token again...</Text>
                )}
                <div className="relative my-2 m-auto rounded-md border border-dashed w-full sm:w-3/4 tab:w-1/2 border-gray-400 flex items-center gap-2">
                  <div className="absolute left-2 top-[30%] w-max">
                    <TiTicket className="text-xl" />
                  </div>
                  <input
                    type="text"
                    name="token"
                    id="token"
                    className="py-3 pr-3 pl-8 w-full rounded-md"
                    placeholder="Token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                  />
                </div>
                <div className="relative sm:w-1/2 m-auto flex justify-end items-center">
                  {!retry && (
                    <SmallText padding={`py-01`}>
                      Didn&apos;t get?{" "}
                      <span
                        onClick={handleMailSubmit}
                        className="text-accent font-semibold cursor-pointer"
                      >
                        Resend Token
                      </span>
                    </SmallText>
                  )}
                </div>

                <div className="relative mt-4 mb-2 m-auto rounded-md border border-dashed w-full sm:w-3/4 tab:w-1/2 border-gray-400 flex items-center gap-2">
                  <div className="absolute left-2 top-[30%] w-max">
                    {<RiLockPasswordLine className="text-xl" />}
                  </div>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="Password"
                    id="password"
                    className="py-3 px-8 w-full rounded-md"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="absolute right-2 top-[35%] w-max"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {!passwordVisible && <RiEyeLine className="text-xl" />}
                    {passwordVisible && <RiEyeCloseLine className="text-xl" />}
                  </div>
                </div>

                <div className="relative mt-4 mb-2 m-auto rounded-md border border-dashed w-full sm:w-3/4 tab:w-1/2 border-gray-400 flex items-center gap-2">
                  <div className="absolute left-2 top-[30%] w-max">
                    {<RiLockPasswordLine className="text-xl" />}
                  </div>
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    name="confirm-password"
                    id="confirm-password"
                    className="py-3 px-8 w-full rounded-md"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div
                    className="absolute right-2 top-[35%] w-max"
                    onClick={() =>
                      setConfirmPasswordVisible(!confirmPasswordVisible)
                    }
                  >
                    {!confirmPasswordVisible && (
                      <RiEyeLine className="text-xl" />
                    )}
                    {confirmPasswordVisible && (
                      <RiEyeCloseLine className="text-xl" />
                    )}
                  </div>
                </div>
                <div className="pt-2 w-max m-auto">
                  <button
                    type="submit"
                    className={`bg-gradient-to-r from-[#0D5152] to-[#1DB6B8] uppercase text-white tab:text-xl font-bold tracking-[4px]  py-2.5 px-[80px] rounded-[10px]`}
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
            {/* <div className="cursor-pointer flex gap-1 items-center justify-end w-full sm:w-3/4 tab:w-1/2 m-auto">
              <HiLockClosed className="text-textColor3" />
              <Text color={`textColor3`}>Forgot Password</Text>
            </div> */}
            {floatingNote.state && (
              <div
                className={`${
                  floatingNote.flag === "success"
                    ? "bg-green-300"
                    : "bg-red-200"
                } p-2 mt-2 rounded-md w-full sm:w-1/2 m-auto`}
              >
                <Text align={`text-center`}>{floatingNote.msg}</Text>
              </div>
            )}
            {/* <div className="pt-2 w-max m-auto">
              <button
                className={`bg-gradient-to-r from-[#0D5152] to-[#1DB6B8] uppercase text-white tab:text-xl font-bold tracking-[4px]  py-2.5 px-[80px] rounded-[10px]`}
              >
                Submit
              </button>
            </div> */}
          </div>
        </div>
        <div className="w-full sm:h-[15%] pt-[40px] sm:pt-4 tab:pt-0">
          <div className="w-max m-auto border-y border-gray-400 flex items-center gap-6 justify-center">
            <div className="flex items-center gap-1">
              <PiPhoneCall className="text-xl" />
              <Text color={`titleColor`} padding={`py-0`}>
                +880 1XXX XXXXXX
              </Text>
            </div>
            <div className="flex items-center gap-1">
              <BiEnvelope className="text-xl" />
              <Text color={`titleColor`} padding={`py-0`}>
                support@fintech.com
              </Text>
            </div>
          </div>
          <Text align={`text-center`}>2024 © FINTECH</Text>
        </div>
      </div>
      <div
        className="hidden sm:block w-[40%] min-h-screen tab:h-full bg-cover rounded-l-[20px] bg-center"
        style={{ backgroundImage: `url(${SideBg})` }}
      ></div>
    </div>
  );
}

export default ForgotPassword;
