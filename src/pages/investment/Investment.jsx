import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import InvestmentHero from "./InvestmentHero";
import PeerToPeer from "./PeerToPeer";
import WhyInvest from "./WhyInvest";

function Investment() {
  return (
    <>
      <InvestmentHero />
      <PeerToP eer />
      <WhyInvest />
      <SectionLayout>
        <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
          <Title align={"text-center"}>
            Auto Invest Profiles Based On Your Risk Appetite
          </Title>
        </div>
      </SectionLayout>
    </>
  );
}

export default Investment;
