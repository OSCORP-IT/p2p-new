import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
import BlogContainer from "../../ui/BlogContainer";
import FAQContainer from "../../ui/Home/FAQContainer";
import SectionLayout from "../../ui/SectionLayout";
import InvestmentHero from "./InvestmentHero";
import InvestProfiles from "./InvestProfiles";
import PeerToPeer from "./PeerToPeer";
import SeamlessInvesting from "./SeamlessInvesting";
import WhyInvest from "./WhyInvest";

function Investment() {
  return (
    <>
      <InvestmentHero />
      <PeerToPeer />
      <WhyInvest />
      <InvestProfiles />
      <SeamlessInvesting />
      <BlogContainer />
      <SectionLayout>
        <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto py-6">
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

export default Investment;
