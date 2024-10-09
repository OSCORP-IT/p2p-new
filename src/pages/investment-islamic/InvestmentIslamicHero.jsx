import { TbHeadset } from "react-icons/tb";
import HeroBg from "../../assets/InvestIslamicHero.png";
import Heading2 from "../../components/Heading2";
import IconButton from "../../components/IconButton";
import PrimaryButton from "../../components/PrimaryButton";
import SmallText from "../../components/SmallText";
import Title from "../../components/Title";
import Sheild from "../../icon/Sheild";
import SectionLayout from "../../ui/SectionLayout";
import SubTitle from "../../components/SubTitle";
function InvestmentIslamicHero() {
  return (
    <div
      className="bg-cover bg-right w-full tab:h-[450px]"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <SectionLayout bg={"transparent"}>
        <div className="w-3/5">
          <Heading2 color={"text-white"}>FINTECH P2P Islamic</Heading2>
          <SubTitle color={"text-[#4abc40]"}>
            Shariah Option Available Now!
          </SubTitle>
        </div>
        <div className="w-3/4 sm:w-5/6 tab:w-3/5 py-5">
          <Title color={"white"}>
            Invest Responsibly, Aligning Beliefs with Smart Investment
          </Title>
          <div className="flex gap-2 items-center">
            <Sheild />
            <SmallText color={`[#4abc40]`}>
              Regulated by Securities Commission Bangladesh
            </SmallText>
          </div>
        </div>
        <div className="flex gap-4 py-6 items-center">
          <PrimaryButton bg={`accent`}>invest now</PrimaryButton>
          <IconButton text={"contact us"} bg={`accent`}>
            <TbHeadset className="font-semibold text-lg" />
          </IconButton>
        </div>
      </SectionLayout>
    </div>
  );
}

export default InvestmentIslamicHero;
