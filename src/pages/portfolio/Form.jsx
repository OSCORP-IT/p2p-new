// import { FaList } from "react-icons/fa6";
// import Heading1 from "../../components/Heading1";
// import Text from "../../components/Text";
// import { LuLayoutDashboard } from "react-icons/lu";
// import { FaChartLine, FaUserEdit } from "react-icons/fa";
// import { FcSettings } from "react-icons/fc";
import Heading2 from "../../components/Heading2";
import PrimaryButton from "../../components/PrimaryButton";
import { GrNotification, GrSearchAdvanced } from "react-icons/gr";
import { BsMessenger } from "react-icons/bs";
import FormContainer from "./FormContainer";

function Form() {
  return (
    <div className="w-full flex items-start justify-normal">
      {/* <div className="bg-white w-1/5 py-5 pr-5 h-screen">
        <Heading1 align={`w-max m-auto`}>P2P New</Heading1>
        <div className="py-12 w-full">
          <div className="flex gap-2 items-center py-1 px-8">
            <FaList />
            <Text font={`font-semibold`} color={`textColor3`}>
              Loans
            </Text>
          </div>
          <div className="flex gap-2 items-center py-1 px-8">
            <LuLayoutDashboard />
            <Text font={`font-semibold`} color={`textColor3`}>
              Dashboard
            </Text>
          </div>
          <div className="flex gap-2 items-center py-1 px-8 shadow-allSide shadow-gray-200 rounded-r-md border-l-4 border-amber-900 w-full">
            <FaUserEdit className="text-accent" />
            <Text font={`font-semibold`} color={`accent`}>
              Portfolio
            </Text>
          </div>
          <div className="flex gap-2 items-center py-1 px-8">
            <FaChartLine />
            <Text font={`font-semibold`} color={`textColor3`}>
              Transactions
            </Text>
          </div>
          <div className="flex gap-2 items-center py-1 px-8">
            <FcSettings />
            <Text font={`font-semibold`} color={`textColor3`}>
              Settings
            </Text>
          </div>
        </div>
      </div> */}
      <div className="bg-gray-100 w-full min-h-screen p-5">
        <div className="w-full flex items-center justify-between pb-10">
          <Heading2>My Portfolio</Heading2>
          <div className="flex items-center gap-4">
            <PrimaryButton bg={`accent`}>Apply for new loan</PrimaryButton>
            <div className="bg-white gap-2 flex items-center pl-2 rounded-md">
              <GrSearchAdvanced />
              <input
                type="text"
                placeholder="Search"
                className="py-2 rounded-md"
              />
            </div>
            <div className=" p-2 rounded-full bg-white cursor-pointer">
              <BsMessenger className="text-xl" />
            </div>
            <div className=" p-2 rounded-full bg-white cursor-pointer">
              <GrNotification className="text-xl" />
            </div>
          </div>
        </div>
        <FormContainer />
      </div>
    </div>
  );
}

export default Form;
