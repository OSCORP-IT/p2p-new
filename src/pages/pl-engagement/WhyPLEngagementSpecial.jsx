import { useNavigate } from "react-router-dom";
import Heading1 from "../../components/Heading1";
import PrimaryButton from "../../components/PrimaryButton";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import SectionLayout from "../../ui/SectionLayout";
function WhyPLEngagementSpecial() {
  const navigate = useNavigate();
  return (
    <SectionLayout>
      <div className="bg-gray-200 p-4 sm:p-6 tab:p-10 rounded-md mt-4">
        <Heading1
          align={`text-center leading-tight`}
          color={`text-titleColor`}
          padding={`pb-2 sm:pb-3 tab:pb-4`}
        >
          Why consider financing for an engagement ring through FINTECH?
        </Heading1>
        <SubHeading font={`font-normal`} align={`text-center`}>
          Why consider financing for an engagement ring through FINTECH?Starting
          a life together involves making smart financial decisions, and that
          includes selecting the perfect ring that your partner will treasure.
        </SubHeading>
        <SubHeading font={`font-normal`} align={`text-center`}>
          Although Prosper can’t assist you in choosing either the ring or your
          life partner, we can help you finance that special symbol. Our simple
          and flexible financing options ensure that you begin your journey with
          both your dream ring and strong financial stability.
        </SubHeading>
        <div
          className="w-max m-auto pt-4"
          onClick={() => navigate("/check-rate")}
        >
          <PrimaryButton>check your rate</PrimaryButton>
        </div>
        <SmallText align={`text-center`}>
          Checking your rate won’t affect your credit score
        </SmallText>
      </div>
    </SectionLayout>
  );
}

export default WhyPLEngagementSpecial;
