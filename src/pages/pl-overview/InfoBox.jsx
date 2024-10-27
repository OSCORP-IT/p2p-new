import Money from "../../icon/Money";
import EnvelopOpen from "../../icon/EnvelopOpen";
import SectionLayout from "../../ui/SectionLayout";
import SealCheck from "../../icon/SealCheck";
import Text from "../../components/Text";
function InfoBox() {
  return (
    <SectionLayout>
      <div className="w-full p-4 shadow-allSide bg-white shadow-gray-200 rounded-md flex flex-wrap sm:flex-nowrap items-center justify-between m-auto">
        <div className="px-6 sm:px-4 tab:px-8 py-2 sm:py-0 sm:pb-0 w-full sm:w-1/3 flex gap-6 sm:gap-4 tab:gap-8 items-center sm:justify-center sm:border-r border-gray-300 border-b sm:border-b-0">
          <Money />
          <Text>Borrow from $2,000 to $50,000</Text>
        </div>
        <div className="px-6 sm:px-4 tab:px-8 py-2 sm:py-0 sm:pb-0 w-full sm:w-1/3 flex gap-6 sm:gap-4 tab:gap-8 items-center sm:justify-center sm:border-r border-gray-300 border-b sm:border-b-0">
          <EnvelopOpen />
          <Text>Get your funds as soon as 1 business day</Text>
        </div>
        <div className="px-6 sm:px-4 tab:px-8 py-2 sm:py-0 sm:pt-0 w-full sm:w-1/3 flex gap-6 sm:gap-4 tab:gap-8 items-center sm:justify-center">
          <SealCheck />
          <Text>No prepayment penalties</Text>
        </div>
      </div>
    </SectionLayout>
  );
}

export default InfoBox;
