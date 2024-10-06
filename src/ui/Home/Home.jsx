import BlogContainer from "./BlogContainer";
import ContactFAQ from "./ContactFAQ";
import Hero from "./Hero";
import LoanImageBoxes from "./LoanImageBoxes";
import SmartFinance from "./SmartFinance";
import Testimonial from "./Testimonial";
import WhyFintech from "./WhyFintech";

function Home() {
  return (
    <>
      <Hero />
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
