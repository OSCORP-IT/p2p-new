import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { unreadNotificationaStatus } from "../../services/Notification";
function DashboardHeader({ setNotificationIsOpen, user, notificationIsOpen }) {
  const [hasUnreadNotification, setHasUnreadNotification] = useState({
    flag: false,
    count: 0,
  });
  useEffect(() => {
    async function fetchNotifications() {
      if (!notificationIsOpen) {
        try {
          const data = await unreadNotificationaStatus(user.userToken);
          if (data.success) {
            setHasUnreadNotification({
              flag: data.result.is_new_notification,
              count: data.result.total_unread_notifications,
            });
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchNotifications();
  }, [user.userToken, notificationIsOpen]);
  return (
    <div className="hidden tab:flex items-center justify-between pl-2 bg-white tab:bg-transparent">
      <SubTitle font={`bold`}>Dashboard</SubTitle>
      <div className="flex items-center gap-4">
        <PrimaryButton bg={`gradient-to-r from-[#ff6b00] to-[#803600]`}>
          apply for new loan
        </PrimaryButton>
        {/* <div className="p-2 bg-white rounded-full">
                <RiMessengerLine className="text-xl" />
              </div> */}
        <div
          className="p-2 bg-white rounded-full relative"
          onClick={() => setNotificationIsOpen(true)}
        >
          <IoMdNotificationsOutline className="text-2xl" />
          {hasUnreadNotification.flag && (
            <div className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
              <h6 className="font-semibold font-poppins text-[10px] text-white">
                {hasUnreadNotification.count}
              </h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
