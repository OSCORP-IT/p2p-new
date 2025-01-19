import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import Peer from "../../assets/SeamlessInvest.png";
import SubTitle from "../../components/SubTitle";
import SubHeading from "../../components/SubHeading";
import CheckSquare from "../../icon/CheckSquare";
function SeamlessInvesting() {
  return (
    <SectionLayout>
      <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
        <Title align={"text-center"}>Seamless Investing</Title>
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-6 justify-between py-5 tab:py-8 px-2 tab:px-0">
        <div className="sm:hidden w-full px-6 mb-4">
          <img
            src={Peer}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto w-11/12"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-6 justify-between h-full flex-1">
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <CheckSquare />
            </div>
            <div>
              <SubTitle padding={"py-0 sm:py-1"} color={"text-primary"}>
                Top up money
              </SubTitle>
              <SubHeading font={"normal"}>
                Register an account with us and top up a minimum of TK 10,000.
              </SubHeading>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <CheckSquare />
            </div>
            <div>
              <SubTitle padding={"py-0 sm:py-1"} color={"text-primary"}>
                Select Auto Invest profile
              </SubTitle>
              <SubHeading font={"normal"}>
                Select one of our Auto Invest Profiles based on your risk
                preferences.
              </SubHeading>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <CheckSquare />
            </div>
            <div>
              <SubTitle padding={"py-0 sm:py-1"} color={"text-primary"}>
                Enjoy your returns
              </SubTitle>
              <SubHeading font={"normal"}>
                Watch your investments grow as our Auto Invest feature
                diversifies your funds across various investment notes.
              </SubHeading>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={Peer}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto w-11/12"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default SeamlessInvesting;
