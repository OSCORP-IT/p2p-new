import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import Wedding from "../../assets/Wedding.png";
import Graduation from "../../assets/Graduation.png";
import Retirement from "../../assets/Retirement.png";
import Birthday from "../../assets/Birthday.png";
import SectionLayout from "../../ui/SectionLayout";
import FullImageBox from "./FullImageBox";
function EventCards() {
  return (
    <>
      <SectionLayout padding={`pt-8 pb-4`}>
        <div className="w-11/12 m-auto py-6">
          <Heading1 color={`text-titleColor`} align={"text-center"}>
            You make memories. We help fund them.
          </Heading1>
          <Text align={"text-center"} padding={`py-3`}>
            Quick and adaptable financing through Prosper is your go-to for
            making your event or occasion come to life. Our unsecured financing
            option has a streamlined application process and provides
            flexibility when you need it.
          </Text>
        </div>
      </SectionLayout>
      <FullImageBox
        imageLeft={true}
        heading={"Wedding"}
        text={
          "Managing multiple vendors like photographers, venues and caterers? Through Prosper, you can obtain a consolidated sum ranging from $2,000 – $50,000¹, ensuring all your expenses are covered under one financing option with a single monthly payment."
        }
      >
        <img
          src={Wedding}
          alt="wedding picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Graduation parties"}
        text={
          "Acknowledge the graduate’s diligence and achievements. Through Prosper, you can fund a festivity that truly reflects your pride in their success."
        }
      >
        <img
          src={Graduation}
          alt="Graduation picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Retirement parties"}
        text={
          "Stepping into retirement is monumental. Even if retirees are leaning toward frugality, financing through Prosper ensures a memorable retirement celebration with predictable budgeting, thanks to fixed interest rates and a 2-5¹ year repayment span. "
        }
      >
        <img
          src={Retirement}
          alt="retirement picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Birthday celebrations"}
        text={
          "Make landmark birthdays memorable! Financing through Prosper offers competitive rates, so you can confidently fund that milestone event or experience for your dear one."
        }
      >
        <img
          src={Birthday}
          alt="cake picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
    </>
  );
}

export default EventCards;
