import { IoMdNotificationsOutline } from "react-icons/io";
import SidebarToggle from "../../icon/SidebarToggle";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/blackLogo.png";
import { useEffect, useState } from "react";
import { unreadNotificationaStatus } from "../../services/Notification";
function DashboardHeaderSmallerDevice({
  handleToggle,
  setNotificationIsOpen,
  user,
  notificationIsOpen,
}) {
  const navigate = useNavigate();
  const [hasUnreadNotification, setHasUnreadNotification] = useState({
    flag: false,
    count: 0,
  });
  useEffect(() => {
    async function fetchNotifications() {
      if (!notificationIsOpen) {
        try {
          const data = await unreadNotificationaStatus(user.userToken);
          setHasUnreadNotification({
            flag: data.result.is_new_notification,
            count: data.result.total_unread_notifications,
          });
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchNotifications();
  }, [user.userToken, notificationIsOpen]);
  return (
    <div className="fixed top-0 left-0 w-full h-[50px] flex items-center justify-between pl-2 bg-white tab:hidden shadow-md z-50">
      <div onClick={handleToggle}>
        <SidebarToggle />
      </div>
      <div>
        <img onClick={() => navigate("/")} src={Logo} alt="logo" />
      </div>
      <div className="flex items-center gap-4">
        {/* <div className="p-2 bg-gray-200 rounded-full">
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

export default DashboardHeaderSmallerDevice;
