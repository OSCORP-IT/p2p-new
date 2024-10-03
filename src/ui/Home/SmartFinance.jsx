import Title from "../../components/Title";
import SectionLayout from "../SectionLayout";
import smarter from "../../assets/smarter.png";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import SubHeading from "../../components/SubHeading";
function SmartFinance() {
  return (
    <SectionLayout bg={"bg-custom-gradient"}>
      <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
        <Title align={"text-center"}>Financing Growth the Smarter Way</Title>
        <div className="p-0.5 bg-accent w-[120px] m-auto"></div>
      </div>
      <div className="py-6 mt-4 tab:mt-8 flex flex-col sm:flex-row items-start justify-between w-full tab:w-11/12 m-auto px-4 tab:px-0">
        <div className="flex-1 w-full sm:w-1/4 tab:w-1/2 flex justify-center items-center">
          <img
            src={smarter}
            alt="Investment Illustration"
            className="w-full max-w-md h-auto md:max-h-full object-contain"
          />
        </div>
        <div className="w-full sm:w-3/4 tab:w-1/2 flex-1 flex flex-col items-end justify-between">
          <div className="pt-4 sm:pt-0">
            <SubTitle align={"w-full text-center sm:text-left"}>
              Easier
            </SubTitle>
            <Text
              padding={"py-1 tab:py-2"}
              align={"w-full text-center sm:text-left sm:w-3/4 tab:w-1/2"}
            >
              The investing & financing process is fast, simple and all done
              online
            </Text>
            <div className="flex items-streach justify-between w-[95%] m-auto sm:m-0 sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-between w-full pt-4">
                <div>
                  <Title color={"primary"}>
                    RM 3400<span className="text-accent">M</span>
                  </Title>
                  <SubHeading align={"uppercase"} color={"textColor3"}>
                    total funded
                  </SubHeading>
                </div>
                <div>
                  <Title color={"primary"}>
                    28000<span className="text-accent">+</span>
                  </Title>
                  <SubHeading align={"uppercase"} color={"textColor3"}>
                    Transactions
                  </SubHeading>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-between w-full sm:w-min pt-4">
                <div>
                  <Title color={"primary"}>
                    1800<span className="text-accent">+</span>
                  </Title>
                  <SubHeading align={"uppercase"} color={"textColor3"}>
                    underserved sme&apos;s
                  </SubHeading>
                </div>

                <div>
                  <Title color={"primary"}>
                    20<span className="text-accent">+</span>
                  </Title>
                  <SubHeading align={"uppercase"} color={"textColor3"}>
                    industries
                  </SubHeading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default SmartFinance;
