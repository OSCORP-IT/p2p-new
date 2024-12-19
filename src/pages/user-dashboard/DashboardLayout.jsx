import { useState } from "react"; // Import useState for managing sidebar toggle
import Logo from "../../assets/blackLogo.png";
import Dashboard from "../../icon/Dashboard";
import Loans from "../../icon/Loans";
import Transaction from "../../icon/Transaction";
import Admin from "../../icon/Admin";
import Setting from "../../icon/Setting";
import Profile from "../../icon/Profile";
import LogOut from "../../icon/LogOut";
import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { RiMessengerLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SidebarToggle from "../../icon/SidebarToggle";
import Disbursement from "../../icon/Disbursement";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/authentication/authSlice";
import { FaAngleDoubleDown } from "react-icons/fa";

function DashboardLayout({ active, children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleToggle = () => {
    setSidebarOpen((prevState) => !prevState); // Toggles the value
  };
  // State for sidebar visibility

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[50px] flex items-center justify-between pl-2 bg-white tab:hidden shadow-md z-50">
        <div onClick={handleToggle}>
          <SidebarToggle />
        </div>
        <div>
          <img onClick={() => navigate("/")} src={Logo} alt="logo" />
        </div>
        <div className="flex items-center gap-4">
          <div className="p-2 bg-gray-200 rounded-full">
            <RiMessengerLine className="text-xl" />
          </div>
          <div className="p-2 bg-gray-200 rounded-full">
            <IoMdNotificationsOutline className="text-xl" />
          </div>
        </div>
      </div>
      <div className="h-[50px] tab:hidden"></div>
      <div className="flex items-start bg-gray-200">
        {/* Sidebar */}
        <div
          className={`fixed tab:relative h-screen z-40 bg-white w-4/6 sm:w-1/3 tab:w-1/5 py-3 tab:py-5 pr-3 tab:pr-5 transition-transform transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="hidden tab:block h-[10%] w-max m-auto pb-2">
            <img onClick={() => navigate("/")} src={Logo} alt="logo" />
          </div>
          <div className="h-[65%] py-2 relative">
            <div className="h-full w-full overflow-y-scroll no-scrollbar">
              {/* Sidebar Links */}
              <FaAngleDoubleDown className="hidden smLap:block laptop:hidden animate-bounce absolute text-textColor3/40 bottom-4 right-0" />
              <div
                onClick={() => navigate("/user/dashboard")}
                className={`cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
                  active === "dashboard" ? "border-l-4 border-l-accent" : ""
                } flex items-center justify-end`}
              >
                <div
                  className={`w-[90%] ${
                    active === "dashboard" ? "shadow-md" : ""
                  } hover:shadow-md py-2 rounded-md`}
                >
                  <div className="flex gap-2 items-center px-8 m-auto">
                    <Dashboard active={active === "dashboard"} />
                    <Text
                      font={`font-semibold`}
                      color={active === "dashboard" ? `accent` : `textColor3`}
                    >
                      Dashboard
                    </Text>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/user/my-loans")}
                className={`mt-[8px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
                  active === "loan" ? "border-l-4 border-l-accent" : ""
                } flex items-center justify-end`}
              >
                <div
                  className={`w-[90%] ${
                    active === "loan" ? "shadow-md" : ""
                  } hover:shadow-md py-2 rounded-md`}
                >
                  <div className="flex gap-2 items-center px-8 m-auto">
                    <Loans active={active === "loan"} />
                    <Text
                      font={`font-semibold`}
                      color={active === "loan" ? `accent` : `textColor3`}
                    >
                      My Loans
                    </Text>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/user/disbursement")}
                className={`mt-[8px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
                  active === "disbursement" ? "border-l-4 border-l-accent" : ""
                } flex items-center justify-end`}
              >
                <div
                  className={`w-[90%] ${
                    active === "disbursement" ? "shadow-md" : ""
                  } hover:shadow-md py-2 rounded-md`}
                >
                  <div className="flex gap-2 items-center px-8 m-auto">
                    <Disbursement active={active === "disbursement"} />
                    <Text
                      font={`font-semibold`}
                      color={
                        active === "disbursement" ? `accent` : `textColor3`
                      }
                    >
                      Disbursement
                    </Text>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/user/transaction")}
                className={`mt-[8px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
                  active === "transaction" ? "border-l-4 border-l-accent" : ""
                } flex items-center justify-end`}
              >
                <div
                  className={`w-[90%] ${
                    active === "transaction" ? "shadow-md" : ""
                  } hover:shadow-md py-2 rounded-md`}
                >
                  <div className="flex gap-2 items-center px-8 m-auto">
                    <Transaction active={active === "transaction"} />
                    <Text
                      font={`font-semibold`}
                      color={active === "transaction" ? `accent` : `textColor3`}
                    >
                      Transaction
                    </Text>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/user/admin-contact")}
                className={`mt-[8px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
                  active === "admin" ? "border-l-4 border-l-accent" : ""
                } flex items-center justify-end`}
              >
                <div
                  className={`w-[90%] ${
                    active === "admin" ? "shadow-md" : ""
                  } hover:shadow-md py-2 rounded-md`}
                >
                  <div className="flex gap-2 items-center px-8 m-auto">
                    <Admin active={active === "admin"} />
                    <Text
                      font={`font-semibold`}
                      color={active === "admin" ? `accent` : `textColor3`}
                    >
                      Admin Contact
                    </Text>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/user/settings")}
                className={`mt-[8px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
                  active === "settings" ? "border-l-4 border-l-accent" : ""
                } flex items-center justify-end`}
              >
                <div
                  className={`w-[90%] ${
                    active === "settings" ? "shadow-md" : ""
                  } hover:shadow-md py-2 rounded-md`}
                >
                  <div className="flex gap-2 items-center px-8 m-auto">
                    <Setting active={active === "settings"} />
                    <Text
                      font={`font-semibold`}
                      color={active === "settings" ? `accent` : `textColor3`}
                    >
                      Settings
                    </Text>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/user/profile")}
                className={`mt-[8px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
                  active === "profile" ? "border-l-4 border-l-accent" : ""
                } flex items-center justify-end`}
              >
                <div
                  className={`w-[90%] ${
                    active === "profile" ? "shadow-md" : ""
                  } hover:shadow-md py-2 rounded-md`}
                >
                  <div className="flex gap-2 items-center px-8 m-auto">
                    <Profile active={active === "profile"} />
                    <Text
                      font={`font-semibold`}
                      color={active === "profile" ? `accent` : `textColor3`}
                    >
                      Profile
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 h-[25%] ml-4 ">
            <img
              src={user.profileImage}
              alt="profile image"
              className="rounded-full h-14 w-14 m-auto border-2 border-blue-900"
            />
            <div className="rounded-md shadow-md pb-2">
              <Text
                padding={"py-1"}
                align={`text-center`}
                font={`font-semibold`}
              >
                {user.userName}
              </Text>
              <button
                className="bg-accent/20 px-8 w-max m-auto py-2 rounded-md flex items-center justify-center gap-2"
                onClick={() => dispatch(logOut())}
              >
                <LogOut />
                <Text padding={`py-0`} color={`accent`} font={`font-semibold`}>
                  Logout
                </Text>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full tab:w-4/5 tab:pt-4 px-2 tab:px-4 overflow-y-scroll h-screen">
          <div className="hidden tab:flex items-center justify-between pl-2 bg-white tab:bg-transparent">
            <SubTitle font={`bold`}>Dashboard</SubTitle>
            <div className="flex items-center gap-4">
              <PrimaryButton bg={`gradient-to-r from-[#ff6b00] to-[#803600]`}>
                apply for new loan
              </PrimaryButton>
              <div className="p-2 bg-white rounded-full">
                <RiMessengerLine className="text-xl" />
              </div>
              <div className="p-2 bg-white rounded-full">
                <IoMdNotificationsOutline className="text-xl" />
              </div>
            </div>
          </div>
          {/* Top Bar */}
          <div className="sm:pl-2 pt-6 h-full">{children}</div>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed left-0 top-4 z-30 lg:hidden inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
}

export default DashboardLayout;
