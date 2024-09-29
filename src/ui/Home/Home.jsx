import Title from "../../components/Title";
import SectionLayout from "../SectionLayout";
import Hero from "./Hero";
import LoanImageBoxes from "./LoanImageBoxes";
import WhyFintech from "./WhyFintech";

function Home() {
  return (
    <>
      <Hero />
      <WhyFintech />
      <LoanImageBoxes />
      <SectionLayout>
        <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
          <Title align={"text-center"}>
            Meet your financial needs Find peace of mind
          </Title>
        </div>
      </SectionLayout>
    </>
  );
}

export default Home;
