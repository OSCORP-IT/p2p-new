import SectionLayout from "../../ui/SectionLayout";
import financialFuture from "../../assets/SitAsset.png";
import Text from "../../components/Text";
import Title from "../../components/Title";

function FinancialFuture() {
  return (
    <SectionLayout>
      <div className="w-11/12 laptop:w-4/5 m-auto py-6">
        <Title align={"text-center"}>
          Don&apos;t just sit on your assets - use them to secure your
          business&apos;s financial future
        </Title>
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center py-5 tab:py-8 px-4 tab:px-0">
        <div className="w-full sm:w-1/3 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={financialFuture}
            alt="finacial illustrator"
            className="object-cover rounded-md m-auto"
          />
        </div>
        <div className="w-full sm:w-2/3 flex justify-end">
          <div className="px-2 sm:px-8 tab:px-0 tab:w-5/6">
            <Text align={"text-center sm:text-left"} padding={"py-2"}>
              Whether it is for expanding your business or managing your
              day-to-day operations, CapBay’s Collateral-Backed Financing has
              got you covered. This collateral-backed financing solution is
              designed to cater to your business needs such as to manage your
              short-term cash flow requirements, refinance your properties, and
              finance your capital goods to ensure that you are able to reach
              your desired business growth!
            </Text>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default FinancialFuture;
