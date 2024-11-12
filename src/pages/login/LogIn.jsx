import SideBg from "../../assets/logInBg.jpeg";
import Logo from "../../assets/BlackLogo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiEyeCloseLine, RiEyeLine, RiLockPasswordLine } from "react-icons/ri";
import { BiEnvelope } from "react-icons/bi";
import SubTitle from "../../components/SubTitle";
import { HiLockClosed } from "react-icons/hi2";
import Text from "../../components/Text";

function LogIn() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [floatingNote, setFloatingNote] = useState({ state: false, msg: "" });
  const [see, setSee] = useState(false);
  return (
    <div className="h-screen w-full flex items-center">
      <div className="w-[60%] h-full flex items-center">
        <div className="w-full">
          <img
            src={Logo}
            alt="logo"
            className="w-max m-auto cursor-pointer"
            onClick={() => navigate("/")}
          />
          <SubTitle
            align={`text-center`}
            font={`bold font-poppins`}
            padding={`pt-[40px] pb-2`}
          >
            Login your account
            <span className="text-accent text-[32px] sm:text-5xl tab:text-6xl">
              .
            </span>
          </SubTitle>
          <div className="my-2 m-auto rounded-md border border-dashed w-1/2 pl-2 border-gray-400 flex items-center gap-2">
            <div className="w-max">{<BiEnvelope className="text-xl" />}</div>
            <input
              type="text"
              name="emailOrPhone"
              id="emailOrPhone"
              className="p-3 w-full rounded-md"
              placeholder="Email/Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
          </div>
          <div className="mt-4 mb-2 m-auto rounded-md border border-dashed w-1/2 px-2 border-gray-400 flex items-center gap-2">
            <div className="w-max">
              {<RiLockPasswordLine className="text-xl" />}
            </div>
            <input
              type={see ? "text" : "password"}
              name="Password"
              id="password"
              className="p-3 w-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-max" onClick={() => setSee(!see)}>
              {see && <RiEyeLine className="text-xl" />}
              {!see && <RiEyeCloseLine className="text-xl" />}
            </div>
          </div>
          <div className="cursor-pointer flex gap-1 items-center justify-end w-1/2 m-auto">
            <HiLockClosed className="text-textColor3" />
            <Text color={`textColor3`}>Forgot Password</Text>
          </div>
        </div>
      </div>
      <div
        className="w-[40%] h-full bg-cover rounded-l-[20px] bg-center"
        style={{ backgroundImage: `url(${SideBg})` }}
      ></div>
    </div>
  );
}

export default LogIn;
