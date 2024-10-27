import IconBox from "../investment/IconBox";
import PrimaryButton from "../../components/PrimaryButton";
import Wallet from "../../icon/Wallet";
import LockOpen from "../../icon/LockOpen";
import Coins from "../../icon/Coins";
import SectionLayout from "../../ui/SectionLayout";
import SmallText from "../../components/SmallText";
import Heading1 from "../../components/Heading1";
function ThreeSteps() {
  return (
    <SectionLayout>
      <div className="w-11/12 m-auto">
        <Heading1 align={"text-center"} padding={`py-4`}>
          3 quick steps to get your personal loans
        </Heading1>
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center h-auto sm:h-[380px] tab:h-[320px] justify-between gap-3 sm:gap-6 py-8">
        <IconBox
          border={true}
          headingCase={`uppercase`}
          smallerTitle={true}
          width={`w-full sm:w-1/3`}
          heading={"1. check your rate"}
          text={
            "Safely share your basic income & expense information with us to see what interest rate you may qualify for"
          }
        >
          <div className="mb-2 bg-gradient-to-b from-[#0da500] to-[#0d5152] from p-2.5 rounded-md w-max m-auto">
            <LockOpen />
          </div>
        </IconBox>
        <IconBox
          border={true}
          headingCase={`uppercase`}
          smallerTitle={true}
          width={`w-full sm:w-1/3`}
          heading={"2. choose your monthly payments"}
          text={
            "Choose the loan length to customize your monthly payment and rate that work best for you to pay off over 2 to 5 years."
          }
        >
          <div className="mb-2 bg-gradient-to-b from-[#0da500] to-[#0d5152] from p-2.5 rounded-md w-max m-auto">
            <Wallet color={"#FFFFFF"} />
          </div>
        </IconBox>
        <IconBox
          border={true}
          headingCase={`uppercase`}
          smallerTitle={true}
          width={`w-full sm:w-1/3`}
          heading={"3. get your funds"}
          text={"Receive your money lightning-fast through direct deposit"}
        >
          <div className="mb-2 bg-gradient-to-b from-[#0da500] to-[#0d5152] from p-2.5 rounded-md w-max m-auto">
            <Coins />
          </div>
        </IconBox>
      </div>
      <div className="w-max m-auto">
        <PrimaryButton>check your rate</PrimaryButton>
      </div>
      <SmallText align={`text-center`} padding={`py-4`}>
        Checking your rate will not affect your credit score
      </SmallText>
    </SectionLayout>
  );
}

export default ThreeSteps;
