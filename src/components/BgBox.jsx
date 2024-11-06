import SectionLayout from "../ui/SectionLayout";
import Heading1 from "./Heading1";
import PrimaryButton from "./PrimaryButton";
import SmallText from "./SmallText";
import SubHeading from "./SubHeading";

function BgBox({ bg, heading, text }) {
  return (
    <SectionLayout>
      <div
        className={`${
          bg ? bg : "bg-gray-200"
        } p-4 sm:p-6 tab:p-10 rounded-md mt-4`}
      >
        <Heading1
          align={`text-center leading-tight tab:w-10/12 tab:m-auto`}
          color={`text-titleColor`}
          padding={`pb-2 sm:pb-3 tab:pb-4`}
        >
          {heading}
        </Heading1>
        <SubHeading font={`font-normal`} align={`text-center`}>
          {text}
        </SubHeading>
        <div className="w-max m-auto pt-8 pb-1">
          <PrimaryButton>check your rate</PrimaryButton>
        </div>
        <SmallText align={`text-center`}>
          Checking your rate won’t affect your credit score
        </SmallText>
      </div>
    </SectionLayout>
  );
}

export default BgBox;
