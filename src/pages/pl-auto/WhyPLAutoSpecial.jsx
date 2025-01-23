import { useNavigate } from "react-router-dom";
import Heading1 from "../../components/Heading1";
import PrimaryButton from "../../components/PrimaryButton";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import SectionLayout from "../../ui/SectionLayout";
function WhyPLAutoSpecial() {
  const navigate = useNavigate();
  return (
    <SectionLayout>
      <div className="bg-gray-200 p-4 sm:p-6 tab:p-10 rounded-md mt-4">
        <Heading1
          align={`text-center leading-tight`}
          color={`text-titleColor`}
          padding={`pb-2 sm:pb-3 tab:pb-4`}
        >
          Why choose Prosper for your vehicle financing?
        </Heading1>
        <SubHeading font={`font-normal`} align={`text-center`}>
          Whether you’re aiming for that dream vehicle or thinking of
          refinancing your existing one, financing through Prosper offers
          affordable options, flexible terms, and efficient financing solutions.
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

export default WhyPLAutoSpecial;
