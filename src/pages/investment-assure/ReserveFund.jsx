import SectionLayout from "../../ui/SectionLayout";
import Peer from "../../assets/ReverseFund.png";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
function ReserveFund() {
  return (
    <SectionLayout>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center py-5 tab:py-8 px-4 tab:px-0">
        <div className="w-full sm:w-2/3 flex justify-start">
          <div className="px-2 sm:px-8 tab:px-0 tab:w-5/6">
            <SubTitle align={"text-center sm:text-left"}>
              We have set up a Reserve Fund to back the Guarantee
            </SubTitle>

            <Text align={"text-center sm:text-left"} padding={"py-2"}>
              We have appointed a Guarantee Company to maintain a reserve fund
              that is designed to pay off our investors in the event an issuer
              defaults. This is done by purchasing the relevant investment note
              from the affected investors and assigning the rights of the
              defaulting note to the Guarantee Company.
            </Text>
          </div>
        </div>
        <div className="rounded-md w-full sm:w-1/3 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={Peer}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default ReserveFund;
