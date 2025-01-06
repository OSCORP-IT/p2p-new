import Heading2 from "../../components/Heading2";
import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
function PerformanceOverview() {
  return (
    <div className="flex  flex-col sm:flex-row items-center gap-3">
      <div className="w-full tab:w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
        <div className=" absolute -top-4 -right-6 blur-2xl  w-[100px] h-[100px] bg-purple-700/20 rounded-full"></div>
        <div className="flex items-center justify-between">
          <div>
            <SubHeading padding={`py-0`} color={`textColor4`}>
              Total Return
            </SubHeading>
            <Text padding={`py-0`} color={`textColor3`}>
              Overall investment performance
            </Text>
            <Heading2
              font={`font-bold font-poppins`}
              padding={`pt-2 pb-0`}
              color={`text-islamic`}
            >
              +12%
            </Heading2>
            <Text padding={`py-0`} color={`textColor4`}>
              ৳ 5,00,000 profit
            </Text>
          </div>
        </div>
      </div>
      <div className="w-full tab:w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
        <div className=" absolute -top-4 -right-6 blur-2xl  w-[100px] h-[100px] bg-accent/20 rounded-full"></div>
        <div className="flex items-center justify-between">
          <div>
            <SubHeading padding={`py-0`} color={`textColor4`}>
              Annualize Return
            </SubHeading>
            <Text padding={`py-0`} color={`textColor3`}>
              Yearly average <br className="hidden sm:block tab:hidden" />{" "}
              return
            </Text>
            <Heading2
              font={`font-bold font-poppins`}
              padding={`pt-2 pb-0`}
              color={`text-islamic`}
            >
              8%
            </Heading2>
            <Text padding={`py-0`} color={`textColor4`}>
              2.1% above market average
            </Text>
          </div>
        </div>
      </div>
      <div className="w-full tab:w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
        <div className=" absolute -top-4 -right-6 blur-2xl  w-[100px] h-[100px] bg-islamic/20 rounded-full"></div>
        <div className="flex items-center justify-between">
          <div>
            <SubHeading padding={`py-0`} color={`textColor4`}>
              Risk-Adjusted Retun
            </SubHeading>
            <Text padding={`py-0`} color={`textColor3`}>
              Sharp Ratio
            </Text>
            <Heading2
              font={`font-bold font-poppins`}
              padding={`pt-2 pb-0`}
              color={`text-accent`}
            >
              1.8
            </Heading2>
            <Text padding={`py-0`} color={`textColor4`}>
              Good risk-adjusted performance{" "}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceOverview;
