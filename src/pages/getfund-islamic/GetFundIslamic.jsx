import FinancialSolutionIslamic from "./FinancialSolutionIslamic";
import GetFundIslamicHero from "./GetFundIslamicHero";
import IslamicEligibility from "./IslamicEligibility";
import WhyFintechIslamic from "./WhyFintechIslamic";
import Testimonial from "../../ui/Home/Testimonial";
import BlogContainer from "../../ui/BlogContainer";

function GetFundIslamic() {
  return (
    <>
      <GetFundIslamicHero />
      <FinancialSolutionIslamic />
      <IslamicEligibility />
      <WhyFintechIslamic />
      <Testimonial />
      <BlogContainer />
    </>
  );
}

export default GetFundIslamic;
