import CollateralHero from "./CollateralHero";
import FinancialFuture from "./FinancialFuture";
import ReserveFundNumbers from "./ReserveFundNumbers";
import ThreeSteps from "./ThreeSteps";
import Testimonial from "../../ui/Home/Testimonial";
import FAQContainer from "../../ui/Home/FAQContainer";
import SectionLayout from "../../ui/SectionLayout";
import Title from "../../components/Title";
import SubHeading from "../../components/SubHeading";

function GetfFundCollateral() {
  return (
    <>
      <CollateralHero />
      <FinancialFuture />
      <ReserveFundNumbers />
      <ThreeSteps />
      <Testimonial />
      <SectionLayout>
        <div className="w-11/12 sm:w-4/5 m-auto py-6">
          <Title align={"text-center"}>Questions? We’re here to help</Title>
          <SubHeading align={"text-center"} font={"normal"}>
            Read our Frequently Asked Questions (FAQ) here:
          </SubHeading>
        </div>
        <FAQContainer />
      </SectionLayout>
    </>
  );
}

export default GetfFundCollateral;
