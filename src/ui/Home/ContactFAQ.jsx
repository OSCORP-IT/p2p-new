import { TbHeadset } from "react-icons/tb";
import Heading1 from "../../components/Heading1";
import IconButton from "../../components/IconButton";
import Text from "../../components/Text";
import Title from "../../components/Title";
import SectionLayout from "../SectionLayout";
import Contact from "../../assets/contact.png";
import FAQContainer from "./FAQContainer";
function ContactFAQ() {
  return (
    <SectionLayout>
      <div className="flex flex-wrap tab:flex-nowrap items-center justify-center w-full px-4">
        <div className="w-full tab:w-1/2 ">
          <Title align={"text-center tab:text-left"}>Questions?</Title>
          <div className="w-5/6 m-auto tab:m-0 pb-4 tab:pb-0">
            <Heading1 align={"text-center tab:text-left"} color={"text-black"}>
              We&apos;re here to help
            </Heading1>
            <Text padding={"py-4"} align={"text-center tab:text-left"}>
              Aenean quis est erat. Pellentesque pretium convallis ligula, vite
              euismod nisl vehicula non. In felis leo, faucibus vel sagittis
              pharetra, varius ullamcorper quam.
            </Text>
            <div className="w-max m-auto tab:m-0 tab:w-auto">
              <IconButton text={"contact us"}>
                <TbHeadset className="font-semibold text-lg" />
              </IconButton>
            </div>
            <img
              src={Contact}
              alt="A group of people"
              className="py-4 m-auto tab:m-0"
            />
          </div>
        </div>
        <div className="w-full tab:w-1/2 ">
          <FAQContainer />
        </div>
      </div>
    </SectionLayout>
  );
}

export default ContactFAQ;
