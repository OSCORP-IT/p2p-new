import { TbHeadset } from "react-icons/tb";
import HeroBg from "../../assets/InvestIslamicHero.png";
import Heading2 from "../../components/Heading2";
import IconButton from "../../components/IconButton";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
function GetFundIslamicHero() {
  return (
    <div
      className="bg-cover bg-right w-full tab:h-[420px]"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <SectionLayout bg={"transparent"}>
        <div className="w-3/4 sm:w-9/12 tab:w-3/5 py-5">
          <Title color={"text-white"}>
            Introducing FINTECH’s Shariah-complaint Supply Chain Finance
            Solution
          </Title>
          <Heading2 color={"text-[#4abc40]"} padding={`py-2`}>
            FINTECH levels the playing field with financial solutions to
            optimise your business
          </Heading2>
        </div>
        <div className="flex gap-4 py-6 items-center">
          <IconButton text={"contact us"} bg={`accent`}>
            <TbHeadset className="font-semibold text-lg" />
          </IconButton>
        </div>
      </SectionLayout>
    </div>
  );
}

export default GetFundIslamicHero;
