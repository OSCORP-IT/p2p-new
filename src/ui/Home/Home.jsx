import Heading2 from "../../components/Heading2";
import BlogContainer from "../BlogContainer";
import SectionLayout from "../SectionLayout";
import ContactFAQ from "./ContactFAQ";
import Hero from "./Hero";
import LoanImageBoxes from "./LoanImageBoxes";
import SmartFinance from "./SmartFinance";
import Testimonial from "./Testimonial";
import WhyFintech from "./WhyFintech";
import Investors from "../../assets/Investors.png";
import Business from "../../assets/Business.png";
import Partners from "../../assets/Partners.png";
import Text from "../../components/Text";
import AccentButton from "../../components/AccentButton";

function Home() {
  return (
    <>
      <Hero />
      <SectionLayout>
        <div className="py-4 flex flex-col sm:flex-row items-center gap-4 tab:gap-8 sm:h-[480px] tab:h-[400px]">
          <div className="p-3 tab:p-6 w-full sm:w-1/3 rounded-md border tab:border-0 border-gray-400 tab:shadow-2xl sm:h-full">
            <div className="h-[30%] tab:h-[35%] flex items-end justify-between">
              <Heading2 padding={`py-0`}>Investors</Heading2>
              <img src={Investors} alt="investors" />
            </div>
            <div className="h-[55%] tab:h-[50%]">
              <Text align={`text-justify`} padding={`py-2`}>
                We help individual & institutional investors build the perfect
                portfolio by investing in financing notes that are backed by
                trade receivables. An asset class with high yields and low
                volatility.
              </Text>
            </div>
            <div className="h-[10%] tab:h-[15%] my-2 w-max m-auto">
              <AccentButton>Invest Now</AccentButton>
            </div>
          </div>
          <div className="p-3 tab:p-6 w-full sm:w-1/3 rounded-md border tab:border-0 border-gray-400 tab:shadow-2xl sm:h-full">
            <div className="h-[30%] tab:h-[35%] flex items-end justify-between">
              <Heading2 padding={`py-0`}>Business</Heading2>
              <img src={Business} alt="Business" />
            </div>
            <div className="h-[55%] tab:h-[50%]">
              <Text align={`text-justify`} padding={`py-2`}>
                We provide SMEs access to a range of smart supply chain
                financing solutions such as purchase order financing, invoice
                factoring, inventory financing and working capital financing.
              </Text>
            </div>
            <div className=" h-[10%] tab:h-[15%] my-2 w-max m-auto">
              <AccentButton>Get Fund</AccentButton>
            </div>
          </div>
          <div className="p-3 tab:p-6 w-full sm:w-1/3 rounded-md border tab:border-0 border-gray-400 tab:shadow-2xl sm:h-full">
            <div className="h-[30%] tab:h-[35%] flex items-end justify-between">
              <Heading2 padding={`py-0`}>Partners</Heading2>
              <img src={Partners} alt="Partners" />
            </div>
            <div className="h-[55%] tab:h-[50%]">
              <Text align={`text-justify`} padding={`py-2`}>
                We produce tremendous value for financial institutions, asset
                managers and financial advisors. Be a partner and help
                institutional clients unlock cash flow or new investment
                opportunities.
              </Text>
            </div>
            <div className="h-[10%] tab:h-[15%] my-2 w-max m-auto">
              <AccentButton>Partner Now</AccentButton>
            </div>
          </div>
        </div>
      </SectionLayout>
      <WhyFintech />
      <LoanImageBoxes />
      <SmartFinance />
      <Testimonial />
      <BlogContainer />
      <ContactFAQ />
    </>
  );
}

export default Home;
