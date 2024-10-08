import BlogContainer from "../../ui/BlogContainer";
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
    </>
  );
}

export default Investment;
