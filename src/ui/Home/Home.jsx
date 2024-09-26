import Hero from "./Hero";
import Text from "../../components/Text";
import Title from "../../components/Title";
import Webhook from "../../icon/Webhook";
import CircleThreePlus from "../../icon/CircleThreePlus";
import Elements from "../../icon/Elements";
import Heading2 from "../../components/Heading2";

function Home() {
  return (
    <>
      <Hero />
      <div className="w-full bg-primary rounded-t-[20px]">
        <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto py-6">
          <Text color={"white"} align={"text-center"}>
            Why FINTECH
          </Text>
          <div className="w-3/5 laptop:w-1/2 m-auto">
            <Title color={"white"} align={"text-center"}>
              The only FINTECH platform you’ll ever need in country
            </Title>
            <Text color={"white"} align={"text-center"} padding={"py-2"}>
              Our online banking platform is user-friendly and easy to navigate.
            </Text>
          </div>
          <div className="py-6 flex gap-6 items-start justify-center">
            <div className="w-1/3 flex flex-col items-center justify-between">
              <div className="bg-secondary rounded-full p-2">
                <div className="bg-primary/50 p-1 rounded-full">
                  <Webhook />
                </div>
              </div>
              <Heading2 color={"white"} padding={"pt-2"}>
                Technology-Driven
              </Heading2>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center">
              <div className="bg-secondary rounded-full p-2">
                <div className="bg-primary/50 p-1 rounded-full">
                  <CircleThreePlus />
                </div>
              </div>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center">
              <div className="bg-secondary rounded-full p-2">
                <div className="bg-primary/50 p-1 rounded-full">
                  <Elements />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
