import Heading1 from "../../components/Heading1";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";

function CalculationResult({ data }) {
  return (
    <div className="bg-white rotate-[8deg] rounded-[15px] p-[20px]">
      <Text align={`text-center`} color={`accent`} padding={`pb-2`}>
        Your Result is Ready
      </Text>
      <Heading2 align={`text-center`} font={`font-normal`}>
        Here&apos;s what your loan could look like
      </Heading2>
      <div className="p-4">
        <Text font={`font-semibold`} align={`text-center`} color={`accent`}>
          Monthly Payment
        </Text>
        <Heading1 align={`text-center`} font={`font-normal`}>
          $240-$350
        </Heading1>
        <Text
          font={`font-semibold`}
          align={`text-center`}
          color={`accent`}
          padding={"pt-4"}
        >
          Annual % Rate
        </Text>
        <Heading1 align={`text-center`} font={`font-normal`}>
          $240-$350
        </Heading1>
      </div>
    </div>
  );
}

export default CalculationResult;
