import Heading2 from "../../components/Heading2";
import Heading1 from "../../components/Heading1";
import SmallText from "../../components/SmallText";
import PrimaryButton from "../../components/PrimaryButton";
import { useState } from "react";
import Text from "../../components/Text";
function BorrowScreen({ setPage }) {
  const [sliderValue, setSliderValue] = useState(12000);
  return (
    <div className="bg-white rotate-[8deg] rounded-[15px] p-[20px]">
      <Text align={`text-center`} color={`accent`} padding={`pb-2`}>
        2/5
      </Text>
      <Heading2 align={`text-center`} font={`font-normal`}>
        How much would you like to borrow?
      </Heading2>
      <Text align={`text-center`} color={`accent`} padding={`pb-4`}>
        You can choose up to $40,000.
      </Text>
      <Heading1 align={`text-center`} font={`font-normal`}>
        ${sliderValue}
      </Heading1>
      <div className="w-full flex gap-2 items-center py-4">
        <SmallText color={`textColor3`}>2000</SmallText>
        <input
          type="range"
          className="w-full h-1"
          min={2000}
          max={40000}
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
          step={1000}
        />
        <SmallText color={`textColor3`}>40000</SmallText>
      </div>
      <div className="w-max m-auto pt-4" onClick={() => setPage(3)}>
        <PrimaryButton noIcon={true}>continue</PrimaryButton>
      </div>
    </div>
  );
}

export default BorrowScreen;
