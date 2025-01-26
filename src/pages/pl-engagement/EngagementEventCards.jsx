import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import Cash from "../../assets/Cash.png";
import CreditCards from "../../assets/CreditCards.png";
import StoreFinancing from "../../assets/StoreFinancing.png";
import PersonalLoans from "../../assets/PersonalLoans.png";
import SectionLayout from "../../ui/SectionLayout";
import FullImageBox from "./FullImageBox";
function EngagementEventCards() {
  return (
    <>
      <SectionLayout padding={`pt-8 pb-4`}>
        <div className="w-11/12 m-auto py-6">
          <Heading1 color={`text-titleColor`} align={"text-center"}>
            Select the perfect ring. We support your decision.
          </Heading1>
          <Text align={"text-center"} padding={`py-3`}>
            Support the age-old adage of spending two months’ salary on a ring.
            Avoid letting societal pressures dictate your financial choices.
          </Text>
          <Text align={"text-center"} padding={`py-3`}>
            The ring’s value lies in its symbolism, not its price tag. As you’re
            committing for the long haul, think ahead when considering how to
            fund the purchase. Here are common methods people opt for:
          </Text>
        </div>
      </SectionLayout>
      <FullImageBox
        imageLeft={true}
        heading={"Cash"}
        text={
          "Choosing to pay in cash is a smart way to avoid accumulating debt. However, paying for an expensive ring upfront can compromise other financial goals, such as building an emergency fund or saving for a down payment on a home."
        }
      >
        <img
          src={Cash}
          alt="Cash picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Credit cards"}
        text={
          "Credit cards are a popular choice for big-ticket items, but accruing interest can be a concern. If financing through Prosper offers a better rate, it might be a wise alternative. "
        }
        rowReverese={true}
      >
        <img
          src={CreditCards}
          alt="CreditCards picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Store financing"}
        text={
          "Many jewelers offer financing options, including low or 0% interest rates for introductory periods. Prosper’s solutions may be advantageous depending on your financial situation and available offers. "
        }
      >
        <img
          src={StoreFinancing}
          alt="StoreFinancing picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        rowReverese={true}
        heading={"Personal loans"}
        text={
          "Personal loans are unsecured and can be repaid through monthly installments. Loans like those through Prosper provide fast funding, fair interest rates, and flexible repayment terms."
        }
      >
        <img
          src={PersonalLoans}
          alt="PersonalLoans picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>

      <SectionLayout padding={`pt-8 pb-4`}>
        <div className="m-auto py-6">
          <Heading1 color={`text-titleColor`} align={"text-center"}>
            Financing through FINTECH: Swift, adaptable solutions
          </Heading1>
          <Text align={"text-center sm:w-4/6 sm:m-auto"} padding={`py-4`}>
            Acquire the perfect engagement ring with prompt, flexible financing
            through Prosper. Use any remaining funds to create a memorable
            proposal event or trip.
          </Text>
        </div>
      </SectionLayout>
    </>
  );
}

export default EngagementEventCards;
