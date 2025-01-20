import HeroImg from "../../assets/collateral.png";
import IconButton from "../../components/IconButton";
import PrimaryButton from "../../components/PrimaryButton";
import { TbHeadset } from "react-icons/tb";
import Heading1 from "../../components/Heading1";
import SubHeading from "../../components/SubHeading";
import { useNavigate } from "react-router-dom";
function CollateralHero() {
  const navigate = useNavigate();
  return (
    <div className="w-full relative overflow-hidden">
      <div className="hidden sm:block absolute -top-10 tab:-top-20 left-0 -z-50 blur-[150px] bg-primary/40 rounded-full w-[250px] tab:w-[450px] h-[180px] tab:h-[300px]"></div>
      <div className="pt-4 px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex flex-wrap sm:flex-nowrap items-center justify-between tab:h-[400px]">
        <div className="hidden sm:block sm:w-2/3 tab:w-3/5">
          <Heading1 padding={"py-0 leading-tight"}>
            Elevate your business’s Potential through FINTECH’s
          </Heading1>
          <Heading1 color={`text-accent`} padding={`pt-2`}>
            Collateral-Banked Financing
          </Heading1>
          <div className="flex justify-center items-start py-4 gap-4 w-4/5">
            <div className="flex justify-center items-start gap-2 w-1/2">
              <div className="p-1.5 mt-1 bg-accent rotate-45"></div>
              <SubHeading padding={"py-0"}>
                Up to 200% Finacing Margin
              </SubHeading>
            </div>
            <div className="flex justify-center items-start gap-2 w-1/2">
              <div className="p-1.5 mt-1 bg-accent rotate-45"></div>
              <SubHeading padding={"py-0"}>
                Up to 200% Finacing Margin
              </SubHeading>
            </div>
          </div>

          <div className="flex gap-4 pt-8 pb-4 items-center">
            <PrimaryButton>apply now</PrimaryButton>
            <IconButton
              text={"contact us"}
              onClick={() => navigate("/contact-us")}
            >
              <TbHeadset className="font-semibold text-lg" />
            </IconButton>
          </div>
        </div>
        <div className="w-full sm:w-1/3 tab:w-2/5">
          <div className="flex yab:justify-end relative">
            <img src={HeroImg} alt="hero image" className="-z-10" />
          </div>
        </div>
        <div className="sm:hidden w-full pt-4">
          <Heading1 align={`text-center`} padding={"py-0 leading-tight"}>
            Elevate your business’s Potential through FINTECH’s
          </Heading1>
          <Heading1
            align={`text-center`}
            color={`text-accent`}
            padding={`pt-2`}
          >
            Collateral-Banked Financing
          </Heading1>
          <div className="flex justify-between items-center py-4 gap-4 w-11/12 m-auto">
            <div className="flex justify-center items-start gap-2 w-1/2">
              <div className="p-1.5 mt-1 bg-accent rotate-45"></div>
              <SubHeading padding={"py-0"}>
                Up to 200% Finacing Margin
              </SubHeading>
            </div>
            <div className="flex justify-center items-start gap-2 w-1/2">
              <div className="p-1.5 mt-1 bg-accent rotate-45"></div>
              <SubHeading padding={"py-0"}>
                Up to 200% Finacing Margin
              </SubHeading>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-4 pt-8 pb-4 items-center justify-center m-auto sm:w-max">
            <PrimaryButton>apply now</PrimaryButton>
            <IconButton text={"contact us"}>
              <TbHeadset className="font-semibold text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollateralHero;
