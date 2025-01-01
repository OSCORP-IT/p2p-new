import Title from "../../components/Title";
import HeroImg from "../../assets/referal.png";
import IconButton from "../../components/IconButton";
import Heading2 from "../../components/Heading2";
function ContactHero() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="hidden sm:block absolute -top-20 -left-16 -z-50 blur-[150px] bg-secondary/50 rounded-full w-[180px] tab:w-[300px] h-[180px] tab:h-[300px]"></div>
      <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex flex-wrap sm:flex-nowrap items-center justify-between tab:h-[400px]  sm:mt-4 tab:mt-0">
        <div className="hidden sm:block sm:w-2/5 tab:w-3/5">
          <Heading2 color={`text-accent`}>
            Connect Us Whenever You Need Help
          </Heading2>
          <Title padding={"py-0"} color={`text-primary`}>
            We are here to help our valuable members 24X7.
          </Title>
          <div className="flex gap-4 pt-8 pb-4items-center">
            <IconButton text={"Apply For Loan"} bg={`accent`}></IconButton>
          </div>
        </div>
        <div className="w-full sm:w-1/2 tab:w-2/5">
          <div className="flex justify-end relative">
            <img src={HeroImg} alt="hero image" className="-z-10" />
          </div>
        </div>
        <div className="sm:hidden w-full">
          <Title color={`text-primary`} align={`text-center`} padding={`pt-4`}>
            We are here to help our valuable members 24X7.
          </Title>
          <Heading2 align={"text-center"} color={`text-accent`}>
            Connect Us Whenever You Need Help
          </Heading2>
          <div className="flex gap-4 py-3 items-center w-max m-auto">
            <IconButton text={"Apply For Loan"} bg={`accent`}></IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
