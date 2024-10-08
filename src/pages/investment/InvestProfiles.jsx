import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import Peer from "../../assets/peer.png";
import SubTitle from "../../components/SubTitle";
import SubHeading from "../../components/SubHeading";
function InvestProfiles() {
  return (
    <SectionLayout>
      <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
        <Title align={"text-center"}>
          Auto Invest Profiles Based On Your Risk Appetite
        </Title>
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-6 justify-between py-5 tab:py-8 px-2 tab:px-0">
        <div className="w-full sm:w-1/2 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={Peer}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto w-11/12"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-4 justify-between h-full flex-1">
          <div className="bg-primary/10 rounded-md p-2.5 tab:px-6 tab:py-4">
            <SubTitle padding={"py-0 tab:py-1"} color={"primary"}>
              Conservative
            </SubTitle>
            <SubHeading font={"normal"}>
              Prioritising safer investments to ensure the best portfolio
              quality.
            </SubHeading>
          </div>
          <div className="bg-primary/10 rounded-md p-2.5 tab:px-6 tab:py-4">
            <SubTitle padding={"py-0 tab:py-1"} color={"primary"}>
              Moderate
            </SubTitle>
            <SubHeading font={"normal"}>
              Highly diversified investments for a well-balanced portfolio.
            </SubHeading>
          </div>
          <div className="bg-primary/10 rounded-md p-2.5 tab:px-6 tab:py-4">
            <SubTitle padding={"py-0 tab:py-1"} color={"primary"}>
              Aggressive
            </SubTitle>
            <SubHeading font={"normal"}>
              Maximized returns for taking a higher degree of risk.
            </SubHeading>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default InvestProfiles;
