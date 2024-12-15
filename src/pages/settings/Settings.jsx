import DashboardLayout from "../user-dashboard/DashboardLayout";
import Heading2 from "../../components/Heading2";
import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import SubHeading from "../../components/SubHeading";
import PrimaryButton from "../../components/PrimaryButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Settings() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    }
  }, [user.isLoggedIn, navigate]);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isEmailNotificationEnabled, setIsEmailNotificationEnabled] =
    useState(false);
  const [isSMSNotificationEnabled, setIsSMSNotificationEnabled] =
    useState(false);

  return (
    <DashboardLayout active={`settings`}>
      <div className="bg-white rounded-md px-4 tab:px-8 py-6 w-full">
        <Heading2 font={`font-bold font-poppins`}>Account Settings</Heading2>
        <div className="mt-3">
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
              placeholder="Current Password"
              className="p-2 text-textColor4 rounded-md"
            />
          </div>
          <div className="border border-textColor3 rounded-md">
            <input
              type="password"
              name="new"
              placeholder="New Password"
              className="p-2 text-textColor4 rounded-md"
            />
          </div>
          <div className="border border-textColor3 rounded-md my-2.5">
            <input
              type="password"
              name="confirm"
              placeholder="Confirm New Password"
              className="p-2 text-textColor4 rounded-md"
            />
          </div>
          <div className="pt-2">
            <PrimaryButton noIcon={true} bg={`accent`} padding={`py-3 px-10`}>
              update password
            </PrimaryButton>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;
