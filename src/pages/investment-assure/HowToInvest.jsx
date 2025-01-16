import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import Peer from "../../assets/peer.png";
import SubTitle from "../../components/SubTitle";
import SubHeading from "../../components/SubHeading";
import CursorClick from "../../icon/CursorClick";
import IconButton from "../../components/IconButton";
import { TbHeadset } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
function HowToInvest() {
  const navigate = useNavigate();
  return (
    <SectionLayout>
      <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
        <Title align={"text-center"}>How to Invest in FINTECH Assure?</Title>
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
              <CursorClick />
            </div>
            <div>
              <SubTitle padding={"py-0 sm:py-1"} color={"text-primary"}>
                Option 1
              </SubTitle>
              <SubHeading font={"normal"}>
                Automatically invest in CapBay Assure through the Conservative
                and Moderate Auto Invest Profiles.
              </SubHeading>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <CursorClick />
            </div>
            <div>
              <SubTitle padding={"py-0 sm:py-1"} color={"text-primary"}>
                Option 2
              </SubTitle>
              <SubHeading font={"normal"}>
                Configure the Custom Auto Invest profile to gain specific
                exposure to CapBay Assure
              </SubHeading>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <CursorClick />
            </div>
            <div>
              <SubTitle padding={"py-0 sm:py-1"} color={"text-primary"}>
                Option 3
              </SubTitle>
              <SubHeading font={"normal"}>
                Manually invest in individual investment notes that are tagged
                to CapBay Assure
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
      <div className="w-max m-auto py-4">
        <IconButton
          text={"contact us"}
          bg={`accent`}
          onClick={() => navigate("/contact-us")}
        >
          <TbHeadset className="font-semibold text-lg" />
        </IconButton>
      </div>
    </SectionLayout>
  );
}

export default HowToInvest;
