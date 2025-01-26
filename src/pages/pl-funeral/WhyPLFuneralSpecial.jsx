import { useNavigate } from "react-router-dom";
import Heading1 from "../../components/Heading1";
import PrimaryButton from "../../components/PrimaryButton";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import SectionLayout from "../../ui/SectionLayout";
function WhyPLFuneralSpecial() {
  const navigate = useNavigate();
  return (
    <SectionLayout>
      <div className="bg-gray-200 p-4 sm:p-6 tab:p-10 rounded-md mt-4">
        <Heading1
          align={`text-center leading-tight`}
          color={`text-titleColor`}
          padding={`pb-2 sm:pb-3 tab:pb-4`}
        >
          Why consider financing a memorial service through FINTECH?
        </Heading1>
        <SubHeading font={`font-normal`} align={`text-center`}>
          In times of grief, the last thing you need is added financial stress.
          Through Prosper, we offer a stress-free solution for end-of-life
          arrangements during difficult times.
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

export default WhyPLFuneralSpecial;
