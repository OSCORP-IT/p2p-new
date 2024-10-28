import DentalCare from "../../assets/DentalCare.png";
import SubTitle from "../../components/SubTitle";
import { FaGreaterThan } from "react-icons/fa6";
function MedicalIconBox({ loanName }) {
  return (
    <div className="cursor-pointer shadow-md hover:shadow-allSide rounded-md hover:shadow-gray-200 shadow-gray-200 w-full sm:w-[90%] tab:w-[48%] flex items-center justify-between p-6 gap-2 tab:gap-4">
      <div className="flex items-center justify-center gap-4 w-[90%]">
        <div className="w-[20%]">
          <img src={DentalCare} alt="doctor illustration" />
        </div>
        <div className="w-[80%]">
          <SubTitle font={`font-normal leading-tight`}>{loanName}</SubTitle>
        </div>
      </div>
      <FaGreaterThan className="text-xl font-bold text-accent w-[10%]" />
    </div>
  );
}

export default MedicalIconBox;
