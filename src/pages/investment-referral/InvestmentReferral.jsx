import { TbUsersGroup } from "react-icons/tb";
import IconButton from "../../components/IconButton";
import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import Phone from "../../assets/Phone.png";
import HowToRefer from "./HowToRefer";
import InvestmentReferralHero from "./InvestmentReferralHero";

function InvestmentReferral() {
  return (
    <>
      <InvestmentReferralHero />
      <HowToRefer />
      <SectionLayout>
        <Title align={"text-center"}>Eligibility</Title>
        <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-between py-3">
          <div className="w-full px-4 sm:px-0 sm:w-3/5">
            <SubHeading font={`font-normal`}>
              Referring investors need to be an active investor on CapBay with a
              minimum Investment Account portfolio size of at least RM10,000.
            </SubHeading>
            <SubHeading font={`font-normal`} padding={`pb-4 pt-2`}>
              Referred investors need to register for an Investment Account with
              CapBay, top up a minimum of RM10,000 and set their Auto Invest
              targets for their entire Investment Account Portfolio.
            </SubHeading>
            <IconButton bg={`accent hidden sm:flex`} text={`start referring`}>
              <TbUsersGroup />
            </IconButton>
          </div>
          <div className=" m-auto sm:m-0 pb-3 sm:pb-0">
            <img src={Phone} alt="Phones for referral" />
          </div>
          <IconButton
            bg={`accent w-max m-auto sm:hidden`}
            text={`start referring`}
          >
            <TbUsersGroup />
          </IconButton>
        </div>
      </SectionLayout>
    </>
  );
}

export default InvestmentReferral;
