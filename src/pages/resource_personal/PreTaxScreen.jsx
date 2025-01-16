import Heading2 from "../../components/Heading2";
import Heading1 from "../../components/Heading1";
import SmallText from "../../components/SmallText";
import PrimaryButton from "../../components/PrimaryButton";
import Text from "../../components/Text";
function PreTaxScreen({ setPage, data, setData }) {
  return (
    <div className="bg-white rotate-[8deg] rounded-[15px] p-[20px]">
      <Text align={`text-center`} color={`accent`} padding={`pb-2`}>
        4/5
      </Text>
      <Heading2
        align={`text-center`}
        font={`font-normal`}
        padding={`pt-2 pb-4`}
      >
        What’s your estimated annual pre-tax income?
      </Heading2>
      <Heading1 align={`text-center`} font={`font-normal`}>
        ${data.estimated_annual_pre_tax_income}
      </Heading1>
      <div className="w-full flex gap-2 items-center py-4">
        <SmallText color={`textColor3`}>2000</SmallText>
        {/* <input
          type="range"
          className="w-full h-1"
          min={1}
          max={300000}
          value={data.estimated_annual_pre_tax_income}
          onChange={(e) =>
            setData({
              ...data,
              estimated_annual_pre_tax_income: e.target.value,
            })
          }
          step={2000}
        /> */}
        <input
          type="range"
          className="w-full h-1"
          min={2000}
          max={300000}
          value={data.estimated_annual_pre_tax_income}
          onChange={(e) =>
            setData({
              ...data,
              estimated_annual_pre_tax_income: e.target.value,
            })
          }
          step={1000}
        />
        <SmallText color={`textColor3`}>300000</SmallText>
      </div>
      <div className="w-max m-auto pt-4" onClick={() => setPage(5)}>
        <PrimaryButton noIcon={true}>continue</PrimaryButton>
      </div>
    </div>
  );
}

export default PreTaxScreen;
