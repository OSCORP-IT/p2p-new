import Heading2 from "../../components/Heading2";
import CalendarDots from "../../assets/CalendarDots2.svg";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import Bank from "../../assets/Bank2.svg";
import SealPercent from "../../assets/SealPercent.svg";
function InitialOverviews() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap w-full items-center gap-2 tab:gap-3">
      <div className="w-full sm:w-[65%] tab:w-2/3 flex flex-wrap sm:flex-nowrap items-center gap-2 tab:gap-3">
        <div className="w-full sm:w-1/2 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
          <div className=" absolute top-3 -right-8  w-[90px] h-[90px] bg-accent/20 rounded-full"></div>
          <div className="flex items-center justify-between">
            <div>
              <SubHeading padding={`py-0`} color={`textColor3`}>
                Total Investment
              </SubHeading>
              <SmallText padding={`py-1`} color={`[#0da500]`}>
                Current Value of your investment
              </SmallText>
              <Heading2 font={`font-bold font-poppins`}>৳ 500,000,000</Heading2>
            </div>
            <div className="p-1 bg-accent rounded-[5px]">
              <img src={Bank} alt="bank" />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
          <div className=" absolute top-3 -right-8  w-[90px] h-[90px] bg-purple-400/20 rounded-full"></div>
          <div className="flex items-center justify-between">
            <div>
              <SubHeading padding={`py-0`} color={`textColor3`}>
                Expected Return Rate
              </SubHeading>
              <SmallText padding={`py-1`} color={`[#0da500]`}>
                Project annual average return
              </SmallText>
              <Heading2 font={`font-bold font-poppins`}>8.7%</Heading2>
            </div>
            <div className="p-1 bg-purple-600 rounded-[5px]">
              <img src={SealPercent} alt="bank" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[35%] tab:w-1/3 shadow-md bg-white p-[10px] overflow-hidden rounded-md relative">
        <div className=" absolute top-3 -right-8  w-[90px] h-[90px] bg-islamic/20 rounded-full"></div>
        <div className="flex items-center justify-between">
          <div>
            <SubHeading padding={`py-0`} color={`textColor3`}>
              Meeting Schedule
            </SubHeading>
            <SmallText padding={`py-1`} color={`[#0da500]`}>
              Next meeting date with authorities
            </SmallText>
            <Heading2 font={`font-bold font-poppins`}>
              September 10, 2025
            </Heading2>
          </div>
          <div className="p-1 bg-islamic rounded-[5px]">
            <img src={CalendarDots} alt="bank" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialOverviews;
