import Heading2 from "../../components/Heading2";
import DashboardLayout from "../user-dashboard/DashboardLayout";
import profile from "../../assets/profile.jpg";
import { PiPencilSimple } from "react-icons/pi";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import Datepicker from "../login/Datepicker";

function Profile() {
  return (
    <DashboardLayout active={"profile"}>
      <div className="bg-white rounded-md px-4 tab:px-8 py-6 w-full">
        <Heading2 font={`font-bold font-poppins`}>User Profile</Heading2>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-5 mt-5 ">
          <div className="relative">
            <img
              src={profile}
              alt="profile photo"
              className="w-[100px] h-[100px] rounded-full"
            />
            <div className="absolute cursor-pointer bottom-0 right-1 bg-white border-[1px] border-textColor3 rounded-full p-0.5">
              <PiPencilSimple className="text-xl" />
            </div>
          </div>
          <div>
            <SubTitle padding={`py-0`}>Abidur Rahman</SubTitle>
            <Text color={`textColor3`} padding={`py-0`}>
              abidur.rahman@example.com
            </Text>
            <Text padding={`py-0`} color={`textColor4`} font={`font-semibold`}>
              Software Developer
            </Text>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mt-5 ">
          <div className="w-full sm:w-1/2">
            <Text font={`font-semibold`}>Full Name</Text>
            <input
              type="text"
              defaultValue={`Abidur Rahman `}
              className="p-2 border text-textColor4 border-textColor3 rounded-md w-full"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <Text font={`font-semibold`}>Email</Text>
            <input
              type="wmail"
              defaultValue={`abidur.rahman@example.com`}
              className="p-2 border text-textColor4 border-textColor3 rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mt-2 ">
          <div className="w-full sm:w-1/2">
            <Text font={`font-semibold`}>Phone Number</Text>
            <input
              type="text"
              defaultValue={`+88 017 23147781`}
              className="p-2 border text-textColor4 border-textColor3 rounded-md w-full"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <Text font={`font-semibold`}>Date of Birth</Text>
            <Datepicker
              rounded={true}
              date={`10/09/1997`}
              textColor={`text-textColor4`}
            />
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mt-2 ">
          <div className="w-full sm:w-1/2">
            <Text font={`font-semibold`}>Profession</Text>
            <select className="p-2 border text-textColor4 border-textColor3 rounded-md w-full">
              <option value="employment">Employment</option>
              <option value="business">Business</option>
              <option value="retired">Retired</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2">
            <Text font={`font-semibold`}>Designation</Text>
            <input
              type="text"
              defaultValue={`Software Developer`}
              className="p-2 border text-textColor4 border-textColor3 rounded-md w-full"
            />
          </div>
        </div>
        <div className="mt-2 ">
          <Text font={`font-semibold`}>Address</Text>
          <input
            type="text"
            defaultValue={`West Tejturipara, Farmgate, Dhaka-1215`}
            className="p-2 border text-textColor4 border-textColor3 rounded-md w-full"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
