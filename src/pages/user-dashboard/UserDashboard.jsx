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
import SmallText from "../../components/SmallText";
function UserDashboard({ active }) {
  return (
    <div className="flex items-start bg-gray-200">
      <div className="h-screen bg-white w-1/5 py-5 pr-5">
        <div className="h-[8%] w-max m-auto pb-2">
          <img src={Logo} alt="logo" />
        </div>
        <div className="h-[67%] py-2">
          {/* <div className="w-full cursor-pointer border-l-4 border-l-accent flex items-center justify-end">
            <div className="w-[90%] shadow-md py-2 rounded-md">
              <div className="flex gap-2 items-center w-max m-auto">
                <Dashboard active={true} />
                <Text font={`font-semibold`} color={`accent`}>
                  Dashboard
                </Text>
              </div>
            </div>
          </div> */}
          <div
            className={`cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
              active ? "border-l-4 border-l-accent" : ""
            } flex items-center justify-end`}
          >
            <div
              className={`w-[90%] ${
                active ? "shadow-md" : ""
              } hover:shadow-md py-2 rounded-md`}
            >
              <div className="flex gap-2 items-center px-8 m-auto">
                <Dashboard active={active} />
                <Text
                  font={`font-semibold`}
                  color={active ? `accent` : `textColor3`}
                >
                  Dashboard
                </Text>
              </div>
            </div>
          </div>
          <div
            className={`mt-[10px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
              active ? "border-l-4 border-l-accent" : ""
            } flex items-center justify-end`}
          >
            <div
              className={`w-[90%] ${
                active ? "shadow-md" : ""
              } hover:shadow-md py-2 rounded-md`}
            >
              <div className="flex gap-2 items-center px-8 m-auto">
                <Loans active={active} />
                <Text
                  font={`font-semibold`}
                  color={active ? `accent` : `textColor3`}
                >
                  My Loans
                </Text>
              </div>
            </div>
          </div>
          <div
            className={`mt-[10px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
              active ? "border-l-4 border-l-accent" : ""
            } flex items-center justify-end`}
          >
            <div
              className={`w-[90%] ${
                active ? "shadow-md" : ""
              } hover:shadow-md py-2 rounded-md`}
            >
              <div className="flex gap-2 items-center px-8 m-auto">
                <Transaction active={active} />
                <Text
                  font={`font-semibold`}
                  color={active ? `accent` : `textColor3`}
                >
                  Transaction
                </Text>
              </div>
            </div>
          </div>
          <div
            className={`mt-[10px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
              active ? "border-l-4 border-l-accent" : ""
            } flex items-center justify-end`}
          >
            <div
              className={`w-[90%] ${
                active ? "shadow-md" : ""
              } hover:shadow-md py-2 rounded-md`}
            >
              <div className="flex gap-2 items-center px-8 m-auto">
                <Admin active={active} />
                <Text
                  font={`font-semibold`}
                  color={active ? `accent` : `textColor3`}
                >
                  Admin Control
                </Text>
              </div>
            </div>
          </div>
          <div
            className={`mt-[10px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
              active ? "border-l-4 border-l-accent" : ""
            } flex items-center justify-end`}
          >
            <div
              className={`w-[90%] ${
                active ? "shadow-md" : ""
              } hover:shadow-md py-2 rounded-md`}
            >
              <div className="flex gap-2 items-center px-8 m-auto">
                <Setting active={active} />
                <Text
                  font={`font-semibold`}
                  color={active ? `accent` : `textColor3`}
                >
                  Settings
                </Text>
              </div>
            </div>
          </div>
          <div
            className={`mt-[10px] cursor-pointer  w-full hover:border-l-4 hover:border-l-accent ${
              active ? "border-l-4 border-l-accent" : ""
            } flex items-center justify-end`}
          >
            <div
              className={`w-[90%] ${
                active ? "shadow-md" : ""
              } hover:shadow-md py-2 rounded-md`}
            >
              <div className="flex gap-2 items-center px-8 m-auto">
                <Profile active={active} />
                <Text
                  font={`font-semibold`}
                  color={active ? `accent` : `textColor3`}
                >
                  Profile
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[25%] ml-4">
          <img
            src={profile}
            alt="profile image"
            className="rounded-full h-14 w-14 m-auto border-2 border-blue-900"
          />
          <div className="rounded-md shadow-md pb-1">
            <Text padding={"py-0"} align={`text-center`}>
              Abidur Rahman
            </Text>
            <SmallText color={`textColor3`} align={`text-center`}>
              Software Engineer
            </SmallText>
            <button className="bg-accent/20 px-8 w-max m-auto py-2 rounded-md flex items-center justify-center gap-2">
              <LogOut />
              <Text padding={`py-0`} color={`accent`} font={`font-semibold`}>
                Logout
              </Text>
            </button>
          </div>
        </div>
      </div>
      <div className="w-4/5"></div>
    </div>
  );
}

export default UserDashboard;
