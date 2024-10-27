import SectionLayout from "../../ui/SectionLayout";
import Laptop from "../../assets/Laptop.png";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";

function WhatDifference() {
  return (
    <SectionLayout>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center py-5 tab:py-8 px-4 tab:px-0">
        <div className="rounded-md w-full sm:w-1/3 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={Laptop}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto"
          />
        </div>
        <div className="w-full sm:w-2/3 flex justify-end">
          <div className="px-2 sm:px-8 tab:px-0 tab:w-5/6">
            <SubTitle align={"text-center sm:text-left"} padding={`pb-2`}>
              Q: What makes a personal loan through Prosper different?
            </SubTitle>
            <SubTitle align={"text-center sm:text-left"} color={`text-primary`}>
              A: Your experience
            </SubTitle>
            <Text align={"text-center sm:text-left"} padding={"py-2"}>
              Prosper is the FIRST peer-to-peer personal loan lending platform
              in the US. This means that a personal loan through Prosper comes
              from traditional investors and a unique group of real people
              choosing to invest in YOU.
            </Text>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default WhatDifference;
