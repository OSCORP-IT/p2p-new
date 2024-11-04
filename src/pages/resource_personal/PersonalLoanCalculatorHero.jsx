import { FaCheckCircle } from "react-icons/fa";
import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
import Title from "../../components/Title";
import Heading2 from "../../components/Heading2";
import Heading1 from "../../components/Heading1";
import SmallText from "../../components/SmallText";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";

function PersonalLoanCalculatorHero() {
  const [sliderValue, setSliderValue] = useState(680);
  return (
    <div className="w-full relative overflow-hidden">
      <div className="pt-4 px-4 tab:px-0 tab:w-10/12 m-auto flex flex-wrap tab:flex-nowrap items-center justify-between tab:h-[410px]">
        <div className="w-full tab:w-2/5">
          <SubHeading
            align={`text-center tab:text-left uppercase`}
            padding={`pb-1`}
            color={`primary`}
          >
            Personal loan calculator
          </SubHeading>
          <Title
            padding={"pb-4 leading-normal"}
            color={`text-titleColor`}
            align={`text-center tab:text-left`}
          >
            Estimate rates and payments
          </Title>
          <div className="flex items-start gap-4 w-[90%] tab:w-auto tab:m-0 m-auto">
            <FaCheckCircle className="text-primary text-xl" />
            <Text padding={`py-0`}>
              Estimate your rate and monthly payment in less than 30 seconds.
            </Text>
          </div>
          <div className="flex items-start gap-4 w-[90%] tab:w-auto tab:m-0 m-auto">
            <FaCheckCircle className="text-primary text-xl" />
            <Text padding={`py-0`}>
              This is not an application and won’t affect your credit score.
            </Text>
          </div>
        </div>
        <div className="w-full tab:w-[50%] p-6 my-6 tab:m-0">
          <div className="w-full shadow-allSide shadow-accent/80 rounded-md">
            <div className="bg-primary -rotate-[8deg] rounded-[15px]">
              <div className="bg-white rotate-[8deg] rounded-[15px] p-[20px]">
                <Text align={`text-center`} color={`accent`} padding={`pb-2`}>
                  1/5
                </Text>
                <Heading2 align={`text-center`} font={`font-normal`}>
                  What’s your estimated credit score?
                </Heading2>
                <Text align={`text-center`} color={`accent`} padding={`pb-2`}>
                  If you don’t know it, give us your best guess.
                </Text>
                <Heading1 align={`text-center`} font={`font-normal`}>
                  {sliderValue} - {Number(sliderValue) + 20}
                </Heading1>
                <div className="w-full flex gap-2 items-center py-4">
                  <SmallText color={`textColor3`}>600</SmallText>
                  <input
                    type="range"
                    className="w-full h-1"
                    max={830}
                    min={600}
                    defaultValue={680}
                    value={sliderValue}
                    onChange={(e) => setSliderValue(e.target.value)}
                    step={10}
                  />
                  <SmallText color={`textColor3`}>850</SmallText>
                </div>
                <div className="w-max m-auto">
                  <PrimaryButton noIcon={true}>continue</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalLoanCalculatorHero;
