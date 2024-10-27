import CashRefer from "./CashRefer";
import GetFundHowItWorks from "./GetFundHowItWorks";
import GetFundReferralEligibility from "./GetFundReferralEligibility";
import GetFundReferralHero from "./GetFundReferralHero";

function GetFundReferral() {
  return (
    <>
      <GetFundReferralHero />
      <CashRefer />
      <GetFundReferralEligibility />
      <GetFundHowItWorks />
    </>
  );
}

export default GetFundReferral;
