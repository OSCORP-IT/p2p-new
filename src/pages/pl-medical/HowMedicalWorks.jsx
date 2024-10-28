import SectionLayout from "../../ui/SectionLayout";
import MedicalWorks from "../../assets/HowMedical.png";
import SubHeading from "../../components/SubHeading";
import CheckSquare from "../../icon/CheckSquare";
import Heading2 from "../../components/Heading2";
import Heading1 from "../../components/Heading1";
import PrimaryButton from "../../components/PrimaryButton";
import SmallText from "../../components/SmallText";
function HowMedicalWorks() {
  return (
    <SectionLayout>
      <div className="w-11/12 tab:w-4/5 m-auto">
        <Heading1
          align={"text-center"}
          padding={`py-2`}
          color={`text-titleColor`}
        >
          How consolidation loans work
        </Heading1>
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-6 justify-between py-5 tab:py-8 px-2 tab:px-0">
        <div className="sm:hidden w-full px-6 mb-4">
          <img
            src={MedicalWorks}
            alt="Medical illustrator"
            className="object-cover rounded-md m-auto w-11/12"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-4 justify-between h-full flex-1">
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <CheckSquare />
            </div>
            <div>
              <Heading2 padding={"py-0 sm:py-1"} color={"text-primary"}>
                Check your rate
              </Heading2>
              <SubHeading font={"normal"}>Get your offer in minutes</SubHeading>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <CheckSquare />
            </div>
            <div>
              <Heading2 padding={"py-0 sm:py-1"} color={"text-primary"}>
                Receive the funds for your medical bills fast
              </Heading2>
              <SubHeading font={"normal"}>
                You can receive your loan in as little as one business day
              </SubHeading>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <CheckSquare />
            </div>
            <div>
              <Heading2 padding={"py-0 sm:py-1"} color={"text-primary"}>
                Pay for your healthcare
              </Heading2>
              <SubHeading font={"normal"}>
                Finance your healthcare expenses upfront and pay off your loan
                with a fixed monthly payment
              </SubHeading>
            </div>
          </div>
          <div className="w-max m-auto pt-2">
            <PrimaryButton>check your rate</PrimaryButton>
          </div>
          <SmallText padding={`p-0`} align={`text-center`}>
            Checking your rate will not affect your credit score
          </SmallText>
        </div>
        <div className="hidden sm:block w-full sm:w-1/2 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={MedicalWorks}
            alt="Medical illustrator"
            className="object-cover rounded-md m-auto w-11/12"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default HowMedicalWorks;
