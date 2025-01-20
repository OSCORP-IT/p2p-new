import IconBox from "../investment/IconBox";
import PrimaryButton from "../../components/PrimaryButton";
import MoneyWavy from "../../icon/MoneyWavy";
import SectionLayout from "../../ui/SectionLayout";
import SmallText from "../../components/SmallText";
import Heading1 from "../../components/Heading1";
import SubHeading from "../../components/SubHeading";
import SealCheck from "../../icon/SealCheck";
import SlidersHorizontal from "../../icon/SlidersHorizontal";
import { useNavigate } from "react-router-dom";
function Cards() {
  const navigate = useNavigate();
  return (
    <SectionLayout>
      <div className="w-11/12 tab:w-4/5 m-auto">
        <Heading1
          align={"text-center leading-tight"}
          padding={`pt-4`}
          color={`text-titleColor`}
        >
          Personal loans made easy
        </Heading1>
        <SubHeading align={`text-center`} font={`font-normal`}>
          $2,000 – $50,000 loans | 2 to 5 year terms | Low interest rates
        </SubHeading>
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center h-auto sm:h-[350px] tab:h-[300px] justify-between gap-3 sm:gap-6 py-8">
        <IconBox
          border={true}
          headingCase={`uppercase`}
          smallerTitle={true}
          width={`w-full sm:w-1/3`}
          heading={"next day funding"}
          text={
            "Get your funds as soon as 1 business day after completing requirements."
          }
        >
          <div className="mb-2 bg-gradient-to-b from-[#0da500] to-[#0d5152] from p-2.5 rounded-md w-max m-auto">
            <MoneyWavy color={`#FFFFFF`} />
          </div>
        </IconBox>
        <IconBox
          border={true}
          headingCase={`uppercase`}
          smallerTitle={true}
          width={`w-full sm:w-1/3`}
          heading={"pay at your own pace"}
          text={
            "Pay off your loan with fixed 2 to 5 year3 terms and a single budget-friendly monthly payment."
          }
        >
          <div className="mb-2 bg-gradient-to-b from-[#0da500] to-[#0d5152] from p-2.5 rounded-md w-max m-auto">
            <SlidersHorizontal />
          </div>
        </IconBox>
        <IconBox
          border={true}
          headingCase={`uppercase`}
          smallerTitle={true}
          width={`w-full sm:w-1/3`}
          heading={"no prepayment penalties"}
          text={"Save on interest when you pay off early. No added fees!"}
        >
          <div className="mb-2 bg-gradient-to-b from-[#0da500] to-[#0d5152] from p-2.5 rounded-md w-max m-auto">
            <SealCheck width={"25"} color={"#FFFFFF"} />
          </div>
        </IconBox>
      </div>
      <div className="w-max m-auto" onClick={() => navigate("/check-rate")}>
        <PrimaryButton>check your rate</PrimaryButton>
      </div>
      <div className="w-full sm:w-1/2 tab:w-1/3 m-auto">
        <SmallText align={`text-center`} padding={`py-4`}>
          Checking your rate on a personal loan for debt consolidation will not
          affect your credit score
        </SmallText>
      </div>
    </SectionLayout>
  );
}

export default Cards;
