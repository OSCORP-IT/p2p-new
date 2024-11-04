import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
function SliderInputs({
  min,
  max,
  sliderValue,
  setSliderValue,
  step,
  label,
  dollar,
  percent,
}) {
  return (
    <>
      <SubHeading color={`textColor2`} font={`font-normal`}>
        {label}
      </SubHeading>
      <div className="flex gap-2 items-start justify-between">
        <div className="w-[80%]">
          <input
            type="range"
            className="w-full h-1"
            min={min}
            max={max}
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            step={step}
          />
          <div className="flex items-start justify-between">
            <SmallText color={`textColor3`}>{min}</SmallText>
            <SmallText color={`textColor3`}>{max}</SmallText>
          </div>
        </div>
        <SubHeading padding={`py-0`}>
          {dollar && "$"}
          {sliderValue}
          {percent && "%"}
        </SubHeading>
      </div>
    </>
  );
}

export default SliderInputs;
