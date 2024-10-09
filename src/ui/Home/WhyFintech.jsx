import Text from "../../components/Text";
import Title from "../../components/Title";
import Webhook from "../../icon/Webhook";
import CircleThreePlus from "../../icon/CircleThreePlus";
import Elements from "../../icon/Elements";
import Heading2 from "../../components/Heading2";
function WhyFintech() {
  return (
    <div className="w-full bg-primary rounded-t-[20px]">
      <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto py-6">
        <Text color={"white"} align={"text-center"}>
          Why FINTECH
        </Text>
        <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
          <Title color={"text-white"} align={"text-center"}>
            The only FINTECH platform you’ll ever need in country
          </Title>
          <Text color={"white"} align={"text-center"} padding={"py-2"}>
            Our online banking platform is user-friendly and easy to navigate.
          </Text>
        </div>
        <div className="py-6 flex flex-wrap sm:flex-nowrap gap-6 tab:gap-10 items-start justify-center">
          <div className="w-full sm:w-[30%] flex flex-col items-center justify-between">
            <div className="bg-secondary rounded-full p-2">
              <div className="bg-primary/50 p-1 rounded-full">
                <Webhook />
              </div>
            </div>
            <Heading2
              align={"text-center"}
              color={"text-white"}
              padding={"pt-2"}
            >
              Technology-Driven
            </Heading2>
            <Text align={"text-center"} color={"white"} padding={"py-2"}>
              We invest heavily in AI technology development and data analytics.
              Adopting data-driven insights & other key industry-specific
              elements to generate sophisticated credit-scoring.
            </Text>
          </div>
          <div className="w-full sm:w-[30%] flex flex-col items-center justify-center">
            <div className="bg-secondary rounded-full p-2">
              <div className="bg-primary/50 p-1 rounded-full">
                <CircleThreePlus />
              </div>
            </div>
            <Heading2
              align={"text-center"}
              color={"text-white"}
              padding={"pt-2"}
            >
              Trade-Related Assets
            </Heading2>
            <Text align={"text-center"} color={"white"} padding={"py-2"}>
              We help facilitate deployment of capital into the real economy
              sector as SME financing requests are triggered by trade events.
            </Text>
          </div>
          <div className="w-full sm:w-[30%] flex flex-col items-center justify-center">
            <div className="bg-secondary rounded-full p-2">
              <div className="bg-primary/50 p-1 rounded-full">
                <Elements />
              </div>
            </div>
            <Heading2
              align={"text-center"}
              color={"text-white"}
              padding={"pt-2"}
            >
              Multi-Funder
            </Heading2>
            <Text align={"text-center"} color={"white"} padding={"py-2"}>
              We have an innovative open bank-independent structure and the
              ability to bring in additional peer-to-peer investors to cover a
              wide range of supply chain financing requests.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyFintech;
