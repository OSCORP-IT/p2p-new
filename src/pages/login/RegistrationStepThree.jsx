import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import Text from "../../components/Text";
import Cross from "../../icon/Cross";
import CheckGreen from "../../icon/CheckGreen";
import { useEffect, useState } from "react";
import { registrationRequest } from "../../services/Authentication";
import { logIn } from "../../features/authentication/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function RegistrationStepThree({ setPage, data, setData }) {
  const [floatingNote, setFloatingNote] = useState({ state: false, msg: "" });
  const [showPasswordMaker, setShowPasswordMaker] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validate, setValidate] = useState({
    lengthValid: false,
    noWhitespace: false,
    hasNumber: false,
    hasUppercase: false,
    hasLowercase: false,
    hasSpecialChar: false,
  });
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [see, setSee] = useState({ first: false, confirm: false });
  const toggleField = (field) => {
    setSee((prevSee) => ({
      ...prevSee,
      [field]: !prevSee[field], // Toggle the specified field
    }));
  };
  useEffect(() => {
    setValidate({
      lengthValid: data.password.length >= 8 && data.password.length <= 16,
      noWhitespace: !/\s/.test(data.password),
      hasNumber: /\d/.test(data.password),
      hasUppercase: /[A-Z]/.test(data.password),
      hasLowercase: /[a-z]/.test(data.password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(data.password),
    });
  }, [data.password]);
  useEffect(() => {
    setPasswordMatch(data.password_confirmation === data.password);
  }, [data.password, data.password_confirmation]);
  async function handleSubmit() {
    console.log(passwordMatch);
    if (!passwordMatch) {
      setFloatingNote({
        state: true,
        msg: "Confirm your password first!",
      }); // Show the div
      setTimeout(() => {
        setFloatingNote({ state: false, msg: "" });
      }, 3000);
      return;
    } else {
      if (Object.values(validate).every((value) => value === true)) {
        try {
          const response = await registrationRequest(data);

          if (response && response.success) {
            // Dispatch the logIn action with the user data
            setFloatingNote({
              state: true,
              msg: response.message,
            });
            setTimeout(() => {
              setFloatingNote({ state: false, msg: "" });
            }, 3000);
            dispatch(
              logIn({
                token: response.result.token,
                name: response.result.client.first_name,
              })
            );
            navigate("/");
          } else {
            setFloatingNote({
              state: true,
              msg: response.message || "Problem checking OTP",
            });
          }
        } catch (err) {
          setFloatingNote({
            state: true,
            msg: err.message,
          });
        }
        return;
      }
    }
    setFloatingNote({
      state: true,
      msg: "You must agree the terms & condition",
    }); // Show the div
    setTimeout(() => {
      setFloatingNote({ state: false, msg: "" });
    }, 3000);
  }
  return (
    <div className="w-full sm:w-3/4 tab:w-2/3 m-auto py-6 sm:py-0">
      <div className="relative mb-2 w-full border bg-white border-gray-400 rounded-md flex items-center gap-2">
        <input
          type={see.first ? "text" : "password"}
          name="Password"
          id="password"
          className="py-2 pl-2 pr-8 tab:py-3 tab:pl-3 w-full rounded-md"
          placeholder="Password"
          value={data.password}
          onFocus={() => setShowPasswordMaker(true)}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <div
          className="absolute right-2 top-[28%] w-max"
          onClick={() => toggleField("first")}
        >
          {!see.first && <RiEyeLine className="text-xl" />}
          {see.first && <RiEyeCloseLine className="text-xl" />}
        </div>
      </div>
      {showPasswordMaker && (
        <div className="bg-gray-200 p-3">
          <Text font={`font-semibold`}>Your password must contain:</Text>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex gap-2 items-center">
                {!validate.lengthValid && <Cross />}
                {validate.lengthValid && <CheckGreen />}
                <Text color={`textColor3`}>8-16 characters</Text>
              </div>
              <div className="flex gap-2 items-center">
                {!validate.noWhitespace && <Cross />}
                {validate.noWhitespace && <CheckGreen />}
                <Text color={`textColor3`}>no whitespace</Text>
              </div>
              <div className="flex gap-2 items-center">
                {!validate.hasNumber && <Cross />}
                {validate.hasNumber && <CheckGreen />}
                <Text color={`textColor3`}>1 numeric value</Text>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                {!validate.hasUppercase && <Cross />}
                {validate.hasUppercase && <CheckGreen />}
                <Text color={`textColor3`}>1 uppercase letter</Text>
              </div>
              <div className="flex gap-2 items-center">
                {!validate.hasLowercase && <Cross />}
                {validate.hasLowercase && <CheckGreen />}
                <Text color={`textColor3`}>1 lowercase letter</Text>
              </div>
              <div className="flex gap-2 items-center">
                {!validate.hasSpecialChar && <Cross />}
                {validate.hasSpecialChar && <CheckGreen />}
                <Text color={`textColor3`}>1 special character</Text>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="relative w-full border bg-white border-gray-400 rounded-md flex items-center gap-2">
        <input
          type={see.confirm ? "text" : "password"}
          name="Confirm Password"
          id="confirm_password"
          className="py-2 pl-2 pr-8 tab:py-3 tab:pl-3 w-full rounded-md"
          placeholder="Confirm Password"
          value={data.password_confirmation}
          onChange={(e) =>
            setData({ ...data, password_confirmation: e.target.value })
          }
        />
        <div
          className="absolute right-2 top-[28%] w-max"
          onClick={() => toggleField("confirm")}
        >
          {!see.confirm && <RiEyeLine className="text-xl" />}
          {see.confirm && <RiEyeCloseLine className="text-xl" />}
        </div>
      </div>
      <div className="pb-3">
        {data.password_confirmation.length > 0 && passwordMatch && (
          <Text padding={`py-0`} color={`primary`}>
            Password matched
          </Text>
        )}
        {!passwordMatch && (
          <Text padding={`py-0`}>
            <span className="text-red-700">Password didn&apos;t match</span>
          </Text>
        )}
      </div>

      {floatingNote.state && (
        <div className="bg-red-200 p-2 mt-2 rounded-md">
          <Text>{floatingNote.msg}</Text>
        </div>
      )}

      <div className="pt-4 w-full flex gap-2 items-center">
        <button
          onClick={() => setPage(1)}
          className={`bg-white uppercase text-primary border border-primary text-base sm:text-lg tab:text-xl font-bold tracking-[4px] py-2.5 rounded-[10px] w-1/2`}
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className={`bg-gradient-to-r from-[#0D5152] to-[#1DB6B8] uppercase text-white text-base sm:text-lg tab:text-xl font-bold tracking-[4px]  py-2.5 rounded-[10px] w-1/2`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default RegistrationStepThree;
