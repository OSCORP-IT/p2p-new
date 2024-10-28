import Heading1 from "../../components/Heading1";
import PrimaryButton from "../../components/PrimaryButton";
import SmallText from "../../components/SmallText";
import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
function WhyPLSpecial() {
  return (
    <SectionLayout>
      <div className="bg-gray-200 p-4 sm:p-6 tab:p-10 rounded-md mt-4">
        <Heading1
          align={`text-center leading-tight`}
          color={`text-titleColor`}
          padding={`pb-2 sm:pb-3 tab:pb-4`}
        >
          Why finance your special occasions through FINTECH?
        </Heading1>
        <SubTitle font={`font-normal`} align={`text-center`}>
          Making significant milestones creates cherished memories but funding
          them shouldn’t dampen the excitement. Ease your worries by financing
          your dream event through Prosper. From weddings to anniversaries or
          even a family getaway, we offer a way to fund those unforgettable
          moments with competitive rates and defined payment terms.
        </SubTitle>
        <div className="w-max m-auto pt-4">
          <PrimaryButton>check your rate</PrimaryButton>
        </div>
        <SmallText align={`text-center`}>
          Checking your rate won’t affect your credit score
        </SmallText>
      </div>
    </SectionLayout>
  );
}

export default WhyPLSpecial;
