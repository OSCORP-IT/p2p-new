import Heading1 from "../../components/Heading1";
import Heading2 from "../../components/Heading2";
import SectionLayout from "../../ui/SectionLayout";
function CashRefer() {
  return (
    <SectionLayout bg={`bg-primary`}>
      <Heading1 align={`text-center`} color={`text-white`} padding={`pt-4`}>
        Refer a Business to us & be rewarded with TK 300 cash
      </Heading1>
      <Heading2
        color={`text-white`}
        align={`text-center`}
        font={`font-normal`}
        padding={`py-6`}
      >
        Know any business that might benefit from our Invoice Financing
        solution? Start referring a business to CapBay and be rewarded with
        RM300 cash for each successful referral.
      </Heading2>
    </SectionLayout>
  );
}

export default CashRefer;
