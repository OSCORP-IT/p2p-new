import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import ConventionalHero from "./ConventionalHero";
import Peer from "../../assets/peer.png";
import IconBoxes from "./IconBoxes";
import GetFundEligibility from "./GetFundEligibility";
import IconBox from "../investment/IconBox";
import Title from "../../components/Title";
import HeadCircuit from "../../icon/HeadCircuit";
import PrimaryButton from "../../components/PrimaryButton";

function GetFundConventional() {
  return (
    <>
      <ConventionalHero />
      <SectionLayout>
        <div className="w-full flex flex-wrap sm:flex-nowrap items-center py-5 tab:py-8 px-4 tab:px-0">
          <div className="bg-white shadow-allSide shadow-gray-200 rounded-md w-full sm:w-1/3 px-6 mb-4 sm:mb-0 sm:px-0">
            <img
              src={Peer}
              alt="peer illustrator"
              className="object-cover rounded-md m-auto"
            />
          </div>
          <div className="w-full sm:w-2/3 flex justify-end">
            <div className="px-2 sm:px-8 tab:px-0 tab:w-5/6">
              <Text align={"text-center sm:text-left"} padding={"py-2"}>
                CapBay&apos;s Supply Chain Financing offers quick and efficient
                financing that can help businesses free up cash trapped in the
                supply chain. With no additional collateral required and
                hassle-free application experience, we are able to extend
                financing at an attractive rate that meets the needs of your
                business — securing financing from us is as easy as A-B-C.
              </Text>
            </div>
          </div>
        </div>
      </SectionLayout>
      <IconBoxes />
      <GetFundEligibility />
      <SectionLayout>
        <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
          <Title align={"text-center"}>
            Here’s why you should finance with FINTECH
          </Title>
        </div>
        <div className="w-full flex flex-wrap sm:flex-nowrap items-start h-auto sm:h-[410px] tab:h-[340px] justify-between gap-3 sm:gap-4 py-8">
          <IconBox
            heading={"Fast and Simple"}
            text={
              "Our digitalised application and documentation process accelerates the speed of approval and disbursement of funds."
            }
          >
            <div className="bg-primary p-1.5 rounded-md w-max m-auto">
              <HeadCircuit />
            </div>
          </IconBox>
          <IconBox
            heading={"Flexible"}
            text={
              "We tailor our solution to the needs of your business so that you can focus on what is important, i.e. running your business."
            }
          >
            <div className="bg-primary p-1.5 rounded-md w-max m-auto">
              <HeadCircuit />
            </div>
          </IconBox>
          <IconBox
            heading={"Technology-driven"}
            text={
              "Our data-driven insights to generate sophisticated credit scoring ensure your objective aligns with your business goals."
            }
          >
            <div className="bg-primary p-1.5 rounded-md w-max m-auto">
              <HeadCircuit />
            </div>
          </IconBox>
          <IconBox
            heading={"Secured"}
            text={
              "We use advanced encryption technology and exceptional security measures to keep your data and information safe."
            }
          >
            <div className="bg-primary p-1.5 rounded-md w-max m-auto">
              <HeadCircuit />
            </div>
          </IconBox>
        </div>
        <div className="w-max m-auto">
          <PrimaryButton>Apply now</PrimaryButton>
        </div>
      </SectionLayout>
    </>
  );
}

export default GetFundConventional;
