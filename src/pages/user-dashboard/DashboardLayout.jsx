// import Logo from "../../assets/blackLogo.png";
// import profile from "../../assets/Profile.jpg";
// import Dashboard from "../../icon/Dashboard";
// import Loans from "../../icon/Loans";
// import Transaction from "../../icon/Transaction";
// import Admin from "../../icon/Admin";
// import Setting from "../../icon/Setting";
// import Profile from "../../icon/Profile";
// import LogOut from "../../icon/LogOut";
// import Text from "../../components/Text";
// import SubTitle from "../../components/SubTitle";
// import PrimaryButton from "../../components/PrimaryButton";
// import { RiMessengerLine } from "react-icons/ri";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// function DashboardLayout({ active, children }) {
//   const navigate = useNavigate();
//   return (
//     <div className="flex items-start bg-gray-200">
//       <div className="sidebar h-screen bg-white w-1/5 py-5 pr-5">
//         <div className="h-[10%] w-max m-auto pb-2">
//           <img src={Logo} alt="logo" />
//         </div>
//         <div className="h-[65%] py-2">
//           {/* <div className="w-full cursor-pointer border-l-4 border-l-accent flex items-center justify-end">
//             <div className="w-[90%] shadow-md py-2 rounded-md">
//               <div className="flex gap-2 items-center w-max m-auto">
//                 <Dashboard active={true} />
//                 <Text font={`font-semibold`} color={`accent`}>
//                   Dashboard
//                 </Text>
//               </div>
//             </div>
//           </div> */}
//           <div
//             onClick={() => navigate("/user/dashboard")}
//             className={`cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
//               active === "dashboard" ? "border-l-4 border-l-accent" : ""
//             } flex items-center justify-end`}
//           >
//             <div
//               className={`w-[90%] ${
//                 active === "dashboard" ? "shadow-md" : ""
//               } hover:shadow-md py-2 rounded-md`}
//             >
//               <div className="flex gap-2 items-center px-8 m-auto">
//                 <Dashboard active={active === "dashboard"} />
//                 <Text
//                   font={`font-semibold`}
//                   color={active === "dashboard" ? `accent` : `textColor3`}
//                 >
//                   Dashboard
//                 </Text>
//               </div>
//             </div>
//           </div>
//           <div
//             onClick={() => navigate("/user/my-loans")}
//             className={`mt-[8px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
//               active === "loan" ? "border-l-4 border-l-accent" : ""
//             } flex items-center justify-end`}
//           >
//             <div
//               className={`w-[90%] ${
//                 active === "loan" ? "shadow-md" : ""
//               } hover:shadow-md py-2 rounded-md`}
//             >
//               <div className="flex gap-2 items-center px-8 m-auto">
//                 <Loans active={active === "loan"} />
//                 <Text
//                   font={`font-semibold`}
//                   color={active === "loan" ? `accent` : `textColor3`}
//                 >
//                   My Loans
//                 </Text>
//               </div>
//             </div>
//           </div>
//           <div
//             onClick={() => navigate("/user/transaction")}
//             className={`mt-[8px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
//               active === "transaction" ? "border-l-4 border-l-accent" : ""
//             } flex items-center justify-end`}
//           >
//             <div
//               className={`w-[90%] ${
//                 active === "transaction" ? "shadow-md" : ""
//               } hover:shadow-md py-2 rounded-md`}
//             >
//               <div className="flex gap-2 items-center px-8 m-auto">
//                 <Transaction active={active === "transaction"} />
//                 <Text
//                   font={`font-semibold`}
//                   color={active === "transaction" ? `accent` : `textColor3`}
//                 >
//                   Transaction
//                 </Text>
//               </div>
//             </div>
//           </div>
//           <div
//             className={`mt-[8px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
//               active === "admin" ? "border-l-4 border-l-accent" : ""
//             } flex items-center justify-end`}
//           >
//             <div
//               className={`w-[90%] ${
//                 active === "admin" ? "shadow-md" : ""
//               } hover:shadow-md py-2 rounded-md`}
//             >
//               <div className="flex gap-2 items-center px-8 m-auto">
//                 <Admin active={active === "admin"} />
//                 <Text
//                   font={`font-semibold`}
//                   color={active === "admin" ? `accent` : `textColor3`}
//                 >
//                   Admin Contact
//                 </Text>
//               </div>
//             </div>
//           </div>
//           <div
//             className={`mt-[8px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
//               active === "setting" ? "border-l-4 border-l-accent" : ""
//             } flex items-center justify-end`}
//           >
//             <div
//               className={`w-[90%] ${
//                 active === "setting" ? "shadow-md" : ""
//               } hover:shadow-md py-2 rounded-md`}
//             >
//               <div className="flex gap-2 items-center px-8 m-auto">
//                 <Setting active={active === "setting"} />
//                 <Text
//                   font={`font-semibold`}
//                   color={active === "setting" ? `accent` : `textColor3`}
//                 >
//                   Settings
//                 </Text>
//               </div>
//             </div>
//           </div>
//           <div
//             className={`mt-[8px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
//               active === "profile" ? "border-l-4 border-l-accent" : ""
//             } flex items-center justify-end`}
//           >
//             <div
//               className={`w-[90%] ${
//                 active === "profile" ? "shadow-md" : ""
//               } hover:shadow-md py-2 rounded-md`}
//             >
//               <div className="flex gap-2 items-center px-8 m-auto">
//                 <Profile active={active === "profile"} />
//                 <Text
//                   font={`font-semibold`}
//                   color={active === "profile" ? `accent` : `textColor3`}
//                 >
//                   Profile
//                 </Text>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="h-[25%] ml-4">
//           <img
//             src={profile}
//             alt="profile image"
//             className="rounded-full h-14 w-14 m-auto border-2 border-blue-900"
//           />
//           <div className="rounded-md shadow-md pb-2">
//             <Text padding={"py-1"} align={`text-center`} font={`font-semibold`}>
//               Abidur Rahman
//             </Text>
//             {/* <SmallText color={`textColor3`} align={`text-center`}>
//               Software Engineer
//             </SmallText> */}
//             <button className="bg-accent/20 px-8 w-max m-auto py-2 rounded-md flex items-center justify-center gap-2">
//               <LogOut />
//               <Text padding={`py-0`} color={`accent`} font={`font-semibold`}>
//                 Logout
//               </Text>
//             </button>
//           </div>
//         </div>
//       </div>
// <div className="w-4/5 pt-4 px-4 overflow-y-scroll h-screen">
//   <div className="flex items-center justify-between pl-2">
//     <SubTitle font={`bold`}>Dashboard</SubTitle>
//     <div className="flex items-center gap-4">
//       <PrimaryButton bg={`gradient-to-r from-[#ff6b00] to-[#803600]`}>
//         apply for new loan
//       </PrimaryButton>
//       <div className="p-2 bg-white rounded-full">
//         <RiMessengerLine className="text-xl" />
//       </div>
//       <div className="p-2 bg-white rounded-full">
//         <IoMdNotificationsOutline className="text-xl" />
//       </div>
//     </div>
//   </div>
//         <div className="pl-2 pt-6 h-full">{children}</div>
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;
import { useState } from "react"; // Import useState for managing sidebar toggle
import Logo from "../../assets/blackLogo.png";
import profile from "../../assets/Profile.jpg";
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

function DashboardLayout({ active, children }) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

  return (
    <>
      <div className="flex items-center justify-between pl-2 bg-white tab:bg-transparent">
        <SidebarToggle />
        <div>
          <img onClick={() => navigate("/")} src={Logo} alt="logo" />
        </div>
        <SubTitle font={`bold hidden tab:block`}>Dashboard</SubTitle>
        <div className="flex items-center gap-4">
          <PrimaryButton
            bg={`gradient-to-r from-[#ff6b00] to-[#803600] hidden tab:block`}
          >
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
      <div className="flex items-start bg-gray-200">
        {/* Sidebar */}
        <div
          className={`overflow-y-scroll tab:overflow-y-hidden fixed tab:relative h-screen z-40 bg-white w-4/6 sm:w-1/3 tab:w-1/5 py-5 pr-5 transition-transform transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="tab:h-[10%] w-max m-auto pb-2">
            <img onClick={() => navigate("/")} src={Logo} alt="logo" />
          </div>
          <div className="tab:h-[65%] py-2">
            {/* Sidebar Links */}
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
              className={`mt-[8px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
                active === "setting" ? "border-l-4 border-l-accent" : ""
              } flex items-center justify-end`}
            >
              <div
                className={`w-[90%] ${
                  active === "setting" ? "shadow-md" : ""
                } hover:shadow-md py-2 rounded-md`}
              >
                <div className="flex gap-2 items-center px-8 m-auto">
                  <Setting active={active === "setting"} />
                  <Text
                    font={`font-semibold`}
                    color={active === "setting" ? `accent` : `textColor3`}
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
            <div
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
          <div className="mt-4 sm:mt-0tab:h-[25%] ml-4">
            <img
              src={profile}
              alt="profile image"
              className="rounded-full h-14 w-14 m-auto border-2 border-blue-900"
            />
            <div className="rounded-md shadow-md pb-2">
              <Text
                padding={"py-1"}
                align={`text-center`}
                font={`font-semibold`}
              >
                Abidur Rahman
              </Text>
              <button
                className="bg-accent/20 px-8 w-max m-auto py-2 rounded-md flex items-center justify-center gap-2"
                onClick={() => console.log("Logout")}
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
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
}

export default DashboardLayout;
