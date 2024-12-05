import { useEffect, useState } from "react";
import SubHeading from "../../components/SubHeading";
import SubTitle from "../../components/SubTitle";
import Gift from "../../icon/Gift";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import Text from "../../components/Text";
import Cross from "../../icon/Cross";
import CheckGreen from "../../icon/CheckGreen";
import { FaLessThan } from "react-icons/fa6";
import PrimaryButton from "../../components/PrimaryButton";
import { registrationRequest } from "../../services/Authentication";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/authentication/authSlice";
function SetPassword({ setPage, data, setData }) {
  const dispatch = useDispatch();
  const [floatingNote, setFloatingNote] = useState({ state: false, msg: "" });
  const [validate, setValidate] = useState({
    lengthValid: false,
    noWhitespace: false,
    hasNumber: false,
    hasUppercase: false,
    hasLowercase: false,
    hasSpecialChar: false,
  });
  const [agree, setAgree] = useState(true);
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
    } else if (agree) {
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
            setPage(4);
          } else {
            setFloatingNote({
              state: true,
              msg: response.message || "Something Wrong!",
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
      setFloatingNote({
        state: true,
        msg: "Invalid Password!",
      }); // Show the div
      setTimeout(() => {
        setFloatingNote({ state: false, msg: "" });
      }, 3000);
      return;
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
    <>
      <div className="w-max m-auto">
        <Gift color={"#0d5152"} size={"60"} />
      </div>
      <SubTitle font={`font-normal`} align={`text-center`} color={`titleColor`}>
        Let’s save your info and get your offers!
      </SubTitle>
      <SubHeading align={`text-center`} padding={`pt-1 pb-4`}>
        Create a password for <span className="text-primary">{data.email}</span>
      </SubHeading>
      <div className="relative mt-4 mb-3 w-full border border-gray-400 flex items-center gap-2">
        <input
          type={see.first ? "text" : "password"}
          name="Password"
          id="password"
          className="py-3 pl-3 pr-8 w-full"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <div
          className="absolute right-2 top-[35%] my-auto w-max"
          onClick={() => toggleField("first")}
        >
          {!see.first && <RiEyeLine className="text-xl" />}
          {see.first && <RiEyeCloseLine className="text-xl" />}
        </div>
      </div>
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
      <div className="relative mt-3 w-full border border-gray-400 flex items-center gap-2">
        <input
          type={see.confirm ? "text" : "password"}
          name="Confirm Password"
          id="confirm_password"
          className="py-3 pl-3 pr-8 w-full"
          placeholder="Confirm Password"
          value={data.password_confirmation}
          onChange={(e) =>
            setData({ ...data, password_confirmation: e.target.value })
          }
        />
        <div
          className="absolute right-2 top-[35%] my-auto w-max"
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
      <SubHeading padding={`py-2`}>
        These documents contain important information, including your consent
        doing business electronically.
      </SubHeading>
      <div className="flex items-start gap-2 justify-between">
        <input
          type="checkbox"
          className="mt-1"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <Text padding={`py-0`} color={`textColor3`}>
          I have read and agree by electronic signature to the Terms of Use and
          Electronic Consent, which includes your consent for us to send you
          emails about our products and services, the Data Terms of Use. WebBank
          and FINTECH privacy policies, Credit Report Authorization, and TCPA
          Authorization.
        </Text>
      </div>
      {floatingNote.state && (
        <div className="bg-red-200 p-2 mt-2 rounded-md">
          <Text>{floatingNote.msg}</Text>
        </div>
      )}
      <div className="flex gap-2 items-center justify-between pt-4">
        <div
          className="border border-primary p-2 rounded-md"
          onClick={() => setPage(8)}
        >
          <FaLessThan className="text-primary" />
        </div>
        <div className="w-full" onClick={handleSubmit}>
          <PrimaryButton width={`w-full`} noIcon={true}>
            Continue
          </PrimaryButton>
        </div>
      </div>
      <Text align={`text-center`} color={`textColor3`}>
        This will not affect your credit score
      </Text>
    </>
  );
}

export default SetPassword;
