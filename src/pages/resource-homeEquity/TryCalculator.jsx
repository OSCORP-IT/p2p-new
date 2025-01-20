import SectionLayout from "../../ui/SectionLayout";
import Laptop from "../../assets/Laptop.png";
import SubTitle from "../../components/SubTitle";
import SubHeading from "../../components/SubHeading";
import { FaGreaterThan } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function TryCalculator() {
  const navigate = useNavigate();
  return (
    <SectionLayout>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center py-5 tab:py-8 px-4 tab:px-0">
        <div className="w-full tab:w-2/3 flex justify-between">
          <div className="sm:w-full tab:w-5/6">
            <div className="border-l-2 border-l-accent w-full p-5 tab:p-[30px] bg-accent/10">
              <SubTitle
                align={`text-left tab:w-4/5 leading-tight`}
                padding={`pb-4`}
              >
                Estimate your rate & monthly payment
              </SubTitle>
              <div
                className="cursor-pointer flex tab:w-4/5 gap-3 items-center"
                onClick={() => navigate("/calculator/personal")}
              >
                <SubHeading color={`primary`} font={`font-normal`}>
                  Try the calculator
                </SubHeading>
                <FaGreaterThan className="font-thin text-primary" />
              </div>
            </div>
            <div className="border-l-2 border-l-gray-300 w-full p-5 tab:p-[30px] mt-1">
              <SubTitle
                align={`text-left tab:w-4/5 leading-tight`}
                padding={`pb-4`}
              >
                See your home equity options side-by-side
              </SubTitle>
              <div
                className="cursor-pointer flex tab:w-4/5 gap-3 items-center"
                onClick={() => navigate("/calculator/debt")}
              >
                <SubHeading color={`primary`} font={`font-normal`}>
                  Compare HELOCs & home equity loans
                </SubHeading>
                <FaGreaterThan className="font-thin text-primary" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden tab:block rounded-md w-full sm:w-1/3 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={Laptop}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default TryCalculator;
