import Heading1 from "../../components/Heading1";
import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
function ReserveFundNumbers() {
  return (
    <SectionLayout bg={"bg-accent/10"}>
      <Heading1 align={"text-center"} padding={"py-2 sm:py-4 leading-tight"}>
        The Reserve Fund is maintained at a Coverage Ratio that sufficiently
        covers Expected Losses
      </Heading1>
      <div className="w-full flex flex-wrap tab:flex-nowrap items-end justify-between py-6 ">
        <div className="w-full tab:w-1/3 py-4 tab:py-0 tab:px-4">
          <SubHeading align={"text-center"}>Financing amount up to</SubHeading>
          <Title align="text-center" padding={"py-2"} color={`text-accent`}>
            TK 25,000,000
          </Title>
        </div>
        <div className="w-[100px] h-[1px] tab::w-[2px] tab::h-[100px] bg-accent m-auto tab::m-0 mt-4"></div>
        <div className="w-full tab:w-1/3 py-4 tab:py-0 tab:px-4">
          <SubHeading align={"text-center"}>
            Financing charges as low as
          </SubHeading>
          <Title align="w-max m-auto" padding={"py-2"} color={`text-accent`}>
            8 % p.a
          </Title>
        </div>
        <div className="w-[100px] h-[1px] tab:w-[2px] tab:h-[100px] bg-accent m-auto tab:m-0 mt-4"></div>
        <div className="w-full tab:w-1/3 py-4 tab:py-0 px-2">
          <SubHeading align={"text-center"}>
            Margin of finance of your property or land value up to
          </SubHeading>
          <Title align="w-max m-auto" padding={"py-2"} color={`text-accent`}>
            200%
          </Title>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ReserveFundNumbers;
