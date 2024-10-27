import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
import DiamondsFour from "../../icon/DiamondsFour";
import SectionLayout from "../../ui/SectionLayout";
function GetFundHowItWorks() {
  return (
    <SectionLayout>
      <Title align={`text-center`} padding={`py-3`}>
        How It Works
      </Title>
      <div className="py-4 flex flex-wrap sm:flex-nowrap items-start divide-y-2 sm:divide-y-0 sm:divide-x-2">
        <div className="w-[95%] m-auto sm:m-0 sm:w-1/3 p-2 sm:p-4 tab:p-8 sm:h-[250px] tab:h-[220px]">
          <div className="flex gap-2 items-center justify-start">
            <DiamondsFour />
            <Title color={"text-primary"}>01</Title>
          </div>
          <SubHeading>Fill up the referral form</SubHeading>
        </div>
        <div className="w-[95%] m-auto sm:m-0 sm:w-1/3 p-2 sm:p-4 tab:p-8 sm:h-[250px] tab:h-[220px]">
          <div className="flex gap-2 items-center justify-start">
            <DiamondsFour />
            <Title color={"text-primary"}>02</Title>
          </div>
          <SubHeading>
            Our friendly expert will reach out to the referred person to
            understand their business financing needs.
          </SubHeading>
        </div>
        <div className="w-[95%] m-auto sm:m-0 sm:w-1/3 p-2 sm:p-4 tab:p-8 sm:h-[250px] tab:h-[220px]">
          <div className="flex gap-2 items-center justify-start">
            <DiamondsFour />
            <Title color={"text-primary"}>03</Title>
          </div>
          <SubHeading>
            You’ll be rewarded once the referred business transacts with us
          </SubHeading>
        </div>
      </div>
    </SectionLayout>
  );
}

export default GetFundHowItWorks;
