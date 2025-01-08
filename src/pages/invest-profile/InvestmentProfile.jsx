import Heading2 from "../../components/Heading2";
import { PiPencilSimple } from "react-icons/pi";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import Datepicker from "../login/Datepicker";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfileData } from "../../services/profile";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BiError } from "react-icons/bi";
import Title from "../../components/Title";
import { MdOutlineVerified } from "react-icons/md";
import ProfileChangeModal from "./ProfileChangeModal";
import InvestmentDashboardLayout from "../investment-dashboard/InvestmentDashboardLayout";

function InvestmentProfile() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [showPrifileChange, setShowProfileChange] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log(userData);
  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate("/auth/login");
    }
    // if (!user.isLoggedIn) {
    //   navigate("/auth/login");
    // }
  }, [user.isLoggedIn, navigate]);
  useEffect(() => {
    async function fetchUserData() {
      if (user.isLoggedIn) {
        try {
          setIsloading(true);
          const data = await getProfileData(user.userToken);
          setUserData(data.result.client);
          setIsloading(false);
        } catch (error) {
          setIsError(true);
          setIsloading(false);
          console.log(error);
        }
      }
    }
    fetchUserData();
  }, [user.isLoggedIn, user.userToken]);

  return (
    <InvestmentDashboardLayout active={"profile"} pageTitle={`Your  Profile`}>
      {showPrifileChange && (
        <ProfileChangeModal
          setShowProfileChange={setShowProfileChange}
          user={user}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      <div className="bg-white rounded-md px-4 tab:px-8 py-6 w-full">
        <Heading2 font={`font-bold font-poppins`}>User Profile</Heading2>
        {isloading && (
          <SkeletonTheme baseColor="#ff6b001a" highlightColor="#fff">
            <div className="w-1/5 my-4">
              <Skeleton circle={true} />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <Skeleton count={6} />
              <Skeleton count={6} />
            </div>
          </SkeletonTheme>
        )}
        {isError && (
          <div className="flex gap-2 animate-pulse items-center m-auto w-max h-max">
            <BiError className="text-red-900 text-3xl" />
            <Title>Error Loading Profile</Title>
          </div>
        )}
        {userData && (
          <>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-5 mt-5 ">
              <div className="relative">
                <img
                  src={userData.profile_image}
                  alt="profile photo"
                  className="w-[100px] h-[100px] rounded-full"
                />
                <div
                  onClick={() => setShowProfileChange(true)}
                  className="absolute cursor-pointer bottom-0 right-1 bg-white border-[1px] border-textColor3 rounded-full p-0.5"
                >
                  <PiPencilSimple className="text-xl" />
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <SubTitle padding={`py-0`}>
                    {userData.first_name + " " + userData.last_name}
                  </SubTitle>
                  <MdOutlineVerified className="text-secondary text-xl font-bold" />
                </div>
                <Text color={`textColor3`} padding={`py-0`}>
                  {userData.email}
                </Text>
                <Text
                  padding={`py-0`}
                  color={`textColor4`}
                  font={`font-semibold`}
                >
                  {userData.designation}
                </Text>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mt-5 ">
              <div className="w-full sm:w-1/2">
                <Text font={`font-semibold`}>Full Name</Text>
                <input
                  type="text"
                  value={userData.first_name + " " + userData.last_name}
                  className="p-2 border text-textColor4 border-textColor3 rounded-md w-full"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <Text font={`font-semibold`}>Email</Text>
                <input
                  type="email"
                  value={userData.email}
                  className="p-2 border text-textColor4 border-textColor3 rounded-md w-full"
                />
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mt-2 ">
              <div className="w-full sm:w-1/2">
                <Text font={`font-semibold`}>Phone Number</Text>
                <input
                  type="text"
                  value={userData.mobile_number}
                  className="p-2 border text-textColor4 border-textColor3 rounded-md w-full"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <Text font={`font-semibold`}>Date of Birth</Text>
                <Datepicker
                  rounded={true}
                  dateFormat={`dd/MM/YYYY`}
                  date={userData.date_of_birth}
                  textColor={`text-textColor4`}
                />
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mt-2 ">
              <div className="w-full sm:w-1/2">
                <Text font={`font-semibold`}>Profession</Text>
                <select
                  value={userData.profession}
                  className="p-2 border text-textColor4 border-textColor3 rounded-md w-full"
                >
                  <option value="">Select Profession</option>
                  <option value="employment">Employment</option>
                  <option value="business">Business</option>
                  <option value="retired">Retired</option>
                </select>
              </div>
              <div className="w-full sm:w-1/2">
                <Text font={`font-semibold`}>Designation</Text>
                <input
                  type="text"
                  value={userData.designation}
                  className="p-2 border text-textColor4 border-textColor3 rounded-md w-full"
                />
              </div>
            </div>
            <div className="mt-2 ">
              <Text font={`font-semibold`}>Address</Text>
              <input
                type="text"
                value={userData.permanent_address}
                className="p-2 border text-textColor4 border-textColor3 rounded-md w-full"
              />
            </div>
          </>
        )}
      </div>
    </InvestmentDashboardLayout>
  );
}

export default InvestmentProfile;
