import InvestmentDashboardLayout from "../investment-dashboard/InvestmentDashboardLayout";
import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import SubHeading from "../../components/SubHeading";
import PrimaryButton from "../../components/PrimaryButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../../services/passwordChange";
import Text from "../../components/Text";
import SmallText from "../../components/SmallText";
import LoadingScreen from "../../ui/LoadingScreen";

function InvestmentSettings() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isEmailNotificationEnabled, setIsEmailNotificationEnabled] =
    useState(false);
  const [isSMSNotificationEnabled, setIsSMSNotificationEnabled] =
    useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [instruction, setInstruction] = useState(false);
  const [validate, setValidate] = useState({
    lengthValid: false,
    noWhitespace: false,
    hasNumber: false,
    hasUppercase: false,
    hasLowercase: false,
    hasSpecialChar: false,
  });
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    } else if (user.userType === "client") {
      navigate("/");
    }
  }, [user.isLoggedIn, user.userType, navigate]);
  if (!user.isLoggedIn || user.userType === "client") {
    <LoadingScreen />;
  }
  useEffect(() => {
    setValidate({
      lengthValid: newPassword.length >= 8 && newPassword.length <= 16,
      noWhitespace: !/\s/.test(newPassword),
      hasNumber: /\d/.test(newPassword),
      hasUppercase: /[A-Z]/.test(newPassword),
      hasLowercase: /[a-z]/.test(newPassword),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    });
  }, [newPassword]);
  const showMessage = (type, text) => {
    setMessage({ type: type, text: text });
    setTimeout(() => {
      setMessage(null);
    }, 3000); // Message will disappear after 3 seconds
  };
  async function handlePasswordChange() {
    if (Object.values(validate).every((value) => value === true)) {
      try {
        const result = await updatePassword(user.userToken, {
          old_password: oldPassword,
          password: newPassword,
          password_confirmation: confirmNewPassword,
        });
        console.log(result);
        showMessage("success", result.message);
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } catch (err) {
        showMessage("failed", err.message);
      }
    } else {
      showMessage("failed", "Invalid Password!!");
    }
  }

  return (
    <InvestmentDashboardLayout
      active={`settings`}
      pageTitle={`Account Settings`}
    >
      <div className="bg-white rounded-md px-4 tab:px-8 py-6 w-full">
        <div>
          <ToggleButton
            label="Two-Factor-Authentication"
            description="Add an extra layer of security to your account"
            enabled={is2FAEnabled}
            onToggle={() => setIs2FAEnabled(!is2FAEnabled)}
          />
          <ToggleButton
            label="Email Notification"
            description="Receive email updates about your account activity"
            enabled={isEmailNotificationEnabled}
            onToggle={() =>
              setIsEmailNotificationEnabled(!isEmailNotificationEnabled)
            }
          />
          <ToggleButton
            label="SMS Notification"
            description="Receive SMS updates about your account activity"
            enabled={isSMSNotificationEnabled}
            onToggle={() =>
              setIsSMSNotificationEnabled(!isSMSNotificationEnabled)
            }
          />
        </div>
        <div className="mt-3">
          <SubHeading color="textColor4" padding={`py-0`} font={`semibold`}>
            Change Password
          </SubHeading>
          <div className="border border-textColor3 rounded-md my-2.5">
            <input
              type="password"
              name="current"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Current Password"
              className="w-full p-2 text-textColor4 rounded-md"
            />
          </div>
          <div className="border border-textColor3 rounded-md">
            <input
              type="password"
              name="new"
              onFocus={() => setInstruction(true)}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className="w-full p-2 text-textColor4 rounded-md"
            />
          </div>
          {instruction && (
            <div className="w-full rounded-md p-2 bg-gray-200 mt-2">
              <SmallText>
                Password should conatin 8 to 16 character and must contain an
                uppercase letter, a lowercase letter, a number, a special
                character (@,#,$,&) and should not have any whitespace
              </SmallText>
            </div>
          )}
          <div className="border border-textColor3 rounded-md my-2.5">
            <input
              type="password"
              name="confirm"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              placeholder="Confirm New Password"
              className="w-full p-2 text-textColor4 rounded-md"
            />
          </div>
          {message && (
            <div
              className={`w-full ${
                message.type === "success" ? "bg-green-500" : "bg-red-500"
              } text-white px-6 py-3 rounded-md`}
            >
              <Text
                font={`font-semibold`}
                align={`text-center`}
                color={`white`}
              >
                {message.text}
              </Text>
            </div>
          )}
          <div className="pt-2" onClick={handlePasswordChange}>
            <PrimaryButton noIcon={true} bg={`accent`} padding={`py-3 px-10`}>
              update password
            </PrimaryButton>
          </div>
        </div>
      </div>
    </InvestmentDashboardLayout>
  );
}

export default InvestmentSettings;
