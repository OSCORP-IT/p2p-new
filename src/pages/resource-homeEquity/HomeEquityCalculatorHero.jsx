import { GiFlame } from "react-icons/gi";
import AccentButton from "../../components/AccentButton";
import PrimaryButton from "../../components/PrimaryButton";
import SubHeading from "../../components/SubHeading";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import Title from "../../components/Title";
import CurrencyDollarSimple from "../../icon/CurrencyDollarSimple";
import SectionLayout from "../../ui/SectionLayout";
import SmallText from "../../components/SmallText";
import { useState } from "react";

function HomeEquityCalculatorHero() {
  const [homeValue, setHomeValue] = useState(null);
  const [mortgageBalance, setMortgageBalance] = useState(null);
  const [totalValue, setTotalValue] = useState(0);
  return (
    <div>
      <SectionLayout bg={`bg-accent/20`}>
        <SubTitle
          align={`uppercase text-center`}
          color={`text-primary`}
          padding={`py-0`}
        >
          home equity calculator
        </SubTitle>
        <div className="w-full tab:w-[70%] tab:m-auto">
          <Title align={`text-center`}>
            How much home equity can you tap into?
          </Title>
          <Text align={`text-center`} color={`textColor2`}>
            Use this calculator to estimate the maximum credit line or loan
            amount you could borrow with a home equity line of credit (HELOC) or
            home equity loan (HELoan) through FINTECH.
          </Text>
        </div>
        <div className="p-[30px] bg-white rounded-[20px] border-2 border-accent mt-4 flex flex-wrap-reverse sm:flex-nowrap items-center">
          <div className="w-full sm:w-[40%] tab:w-2/5 sm:border-r sm:border-r-gray-300 px-4">
            <SubHeading align={`text-center sm:text-left`}>
              About your property
            </SubHeading>
            <div className="border border-gray-300 gap-2 flex items-center rounded-md w-11/12 my-2">
              <div className="px-1">
                <CurrencyDollarSimple />
              </div>
              <input
                type="text"
                value={homeValue}
                onChange={(e) => setHomeValue(Number(e.target.value))}
                placeholder="Estimated Home Value"
                className="w-full  p-2 rounded-md text-sm tab:text-base"
              />
            </div>
            <div className="border border-gray-300 gap-2 flex items-center rounded-md w-11/12 my-4">
              <div className="px-1">
                <CurrencyDollarSimple />
              </div>
              <input
                type="text"
                value={mortgageBalance}
                onChange={(e) => setMortgageBalance(Number(e.target.value))}
                placeholder="Estimated Mortgage Balance"
                className="w-full  p-2 rounded-md text-sm tab:text-base"
              />
            </div>
            <div
              className="w-max m-auto sm:m-0 pt-2 pb-6"
              onClick={() => setTotalValue(homeValue - mortgageBalance)}
            >
              <PrimaryButton noIcon={true}>calculate</PrimaryButton>
            </div>
            <Text
              align={`underline cursor-pointer text-center sm:text-left`}
              color={`textColor3`}
            >
              How this calculator works
            </Text>
          </div>
          <div className="w-full sm:w-[60%] tab:w-3/5 px-3 tab:px-6 pb-4 sm:pb-0">
            <SubHeading align={`text-center`}>
              Your estimated home equity
            </SubHeading>
            <h1 className="text-center text-primary text-[50px] tab:text-[72px] font-semibold">
              ${totalValue}
            </h1>
            <Text align={`text-center tab:w-3/4 tab:m-auto`}>
              You have XX.XX% of your home’s value in equity, so you may be able
              to borrow up to $XXX.
            </Text>
            <div className="w-max m-auto pt-2 pb-3">
              <AccentButton noIcon={true} color={`primary`}>
                get my offer
              </AccentButton>
            </div>
            <div className="shadow-allSide rounded-md p-2 cursor-pointer shadow-gray-200 flex items-center gap-2 w-max m-auto">
              <GiFlame className="text-xl text-accent" />
              <div>
                <SmallText font={`font-bold`} padding={`py-0`}>
                  Apply now to get your offer in minutes
                </SmallText>
                <SmallText padding={`py-0`}>
                  Enjoy our no-stress, speedy digital process
                </SmallText>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 w-5/6 m-auto">
          <Text align={`text-center`}>
            This calculator is a self-help tool for your independent use and is
            intended for illustration purposes only. Results aren’t guaranteed,
            and may not be relevant to your specific circumstance.
          </Text>
        </div>
      </SectionLayout>
    </div>
  );
}

export default HomeEquityCalculatorHero;
