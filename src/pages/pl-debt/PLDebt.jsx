import InfoBox from "../pl-overview/InfoBox";
import ConsolidationLoanCards from "./ConsolidationLoanCards";
import PLDebtHero from "./PLDebtHero";

function PLDebt() {
  return (
    <>
      <PLDebtHero />
      <InfoBox />
      <ConsolidationLoanCards />
    </>
  );
}

export default PLDebt;
