import SectionLayout from "../../ui/SectionLayout";
import Title from "../../components/Title";
import Heading2 from "../../components/Heading2";
import NumberBox from "./NumberBox";
import IconButton from "../../components/IconButton";
import { FaArrowRightLong } from "react-icons/fa6";
function HowItWorks() {
  return (
    <SectionLayout>
      <Title align={`text-center`}>Investing made simple</Title>
      <Heading2 align={`text-center`} padding={"py-3"} color={"text-primary"}>
        How It Works
      </Heading2>
      <div className="flex justify-between flex-wrap sm:flex-nowrap items-start gap-6 py-4">
        <NumberBox
          number={"01"}
          text={
            "Maintain a total investment portfolio of at least TK 10,000 at all times"
          }
        />
        <NumberBox
          number={"02"}
          text={
            "Select and turn on one of the following pre-set Auto Invest profiles (Conservative, Moderate or Aggressive)"
          }
        />
        <NumberBox
          number={"03"}
          text={
            "Be rewarded with 2% p.a.* On the Eligible Balance within your CapBay Account"
          }
        />
      </div>
      <div className="w-max m-auto py-6">
        <IconButton text={"Interested? Register Now"} bg={`accent`}>
          <FaArrowRightLong className="font-semibold text-lg" />
        </IconButton>
      </div>
    </SectionLayout>
  );
}

export default HowItWorks;
