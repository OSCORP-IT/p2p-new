import Text from "../../components/Text";
import Title from "../../components/Title";
import Webhook from "../../icon/Webhook";
import Heading2 from "../../components/Heading2";
import Swatches from "../../icon/Swatches";
import Elements from "../../icon/Elements";
function KeyHighlights() {
  return (
    <div className="w-full bg-primary rounded-xl">
      <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto py-6">
        <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
          <Title color={"text-white"} align={"text-center"}>
            Key Highlights
          </Title>
        </div>
        <div className="py-6 flex flex-wrap sm:flex-nowrap gap-6 tab:gap-10 items-start justify-center">
          <div className="w-full sm:w-[30%] flex flex-col items-center justify-between">
            <div className="bg-secondary rounded-full p-2">
              <div className="bg-primary/50 p-1 rounded-full">
                <Webhook />
              </div>
            </div>
            <Heading2
              align={"text-center capitalize"}
              color={"text-white"}
              padding={"pt-2"}
            >
              low risk
            </Heading2>
            <Text align={"text-center"} color={"white"} padding={"py-2"}>
              Invest with confidence that your principal and interest are
              protected from defaults
            </Text>
          </div>
          <div className="w-full sm:w-[30%] flex flex-col items-center justify-center">
            <div className="bg-secondary rounded-full p-2">
              <div className="bg-primary/50 p-1 rounded-full">
                <Elements />
              </div>
            </div>
            <Heading2
              align={"text-center capitalize"}
              color={"text-white"}
              padding={"pt-2"}
            >
              stable returns
            </Heading2>
            <Text align={"text-center"} color={"white"} padding={"py-2"}>
              CapBay Assure guarantees an attractive net return (after fees) of
              up to 6% p.a.
            </Text>
          </div>
          <div className="w-full sm:w-[30%] flex flex-col items-center justify-center">
            <div className="bg-secondary rounded-full p-2">
              <div className="bg-primary/50 p-1 rounded-full">
                <Swatches />
              </div>
            </div>
            <Heading2
              align={"text-center capitalize"}
              color={"text-white"}
              padding={"pt-2"}
            >
              automated investments
            </Heading2>
            <Text align={"text-center"} color={"white"} padding={"py-2"}>
              Invest in CapBay Assure seamlessly with our Auto Invest feature
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyHighlights;
