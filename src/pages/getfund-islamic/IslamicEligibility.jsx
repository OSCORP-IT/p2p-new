import Title from "../../components/Title";
import IconButton from "../../components/IconButton";
import Flag from "../../icon/Flag";
import CalendarDots from "../../icon/CalendarDots";
import Buildings from "../../icon/Buildings";
import SectionLayout from "../../ui/SectionLayout";
import IconBox from "../investment/IconBox";
import { TbHeadset } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
function IslamicEligibility() {
  const navigate = useNavigate();
  return (
    <SectionLayout bg={`bg-[#e7f6e5]`}>
      <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
        <Title align={"text-center"}>ELIGIBILITY</Title>
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-start h-auto sm:h-[330px] tab:h-[300px] justify-between gap-3 sm:gap-4 tab:gap-6 py-8">
        <IconBox
          width={`w-full sm:w-1/3`}
          heading={"country"}
          headingCase={`uppercase`}
          padding={`p-6`}
          text={
            "You’re a Malaysian registered business, with at least 51% local shareholding"
          }
        >
          <div className="bg-gradient-to-b from-islamic to-[#0d5152] p-2 sm:mb-2 rounded-md w-max m-auto">
            <Flag />
          </div>
        </IconBox>
        <IconBox
          width={`w-full sm:w-1/3`}
          heading={"duration"}
          headingCase={`uppercase`}
          padding={`p-6`}
          text={"Your business has been operating for at least 1 year"}
        >
          <div className="bg-gradient-to-b from-islamic to-[#0d5152] p-2 sm:mb-2 rounded-md w-max m-auto">
            <CalendarDots />
          </div>
        </IconBox>
        <IconBox
          width={`w-full sm:w-1/3`}
          heading={"business"}
          headingCase={`uppercase`}
          padding={`p-6`}
          text={
            "Your business is providing services or goods to other Malaysian businesses on credit terms (B2B)"
          }
        >
          <div className="bg-gradient-to-b from-islamic to-[#0d5152] p-2 sm:mb-2 rounded-md w-max m-auto">
            <Buildings />
          </div>
        </IconBox>
      </div>
      <div className="w-max m-auto">
        <IconButton
          text={"contact us"}
          bg={`[#0da500]`}
          onClick={() => navigate("/contact-us")}
        >
          <TbHeadset className="font-semibold text-lg" />
        </IconButton>
      </div>
    </SectionLayout>
  );
}

export default IslamicEligibility;
