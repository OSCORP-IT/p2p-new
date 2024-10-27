import SectionLayout from "../../ui/SectionLayout";
import Possibility from "../../assets/Possibilities.png";
import SubHeading from "../../components/SubHeading";
import Heading2 from "../../components/Heading2";
import Heading1 from "../../components/Heading1";
import Shapes from "../../icon/Shapes";
function Possibilities() {
  return (
    <SectionLayout>
      <div className="w-11/12 tab:w-3/5 m-auto">
        <Heading1
          align={"text-center leading-tight"}
          padding={`py-2`}
          color={`text-titleColor`}
        >
          Imagine the possibilities with a home improvement loan
        </Heading1>
      </div>
      <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-6 justify-between py-5 tab:py-8 px-2 tab:px-0">
        <div className="sm:hidden w-full px-6 mb-4">
          <img
            src={Possibility}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto w-11/12"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-6 justify-between h-full flex-1">
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <Shapes />
            </div>
            <div>
              <Heading2 padding={"py-0 sm:py-1"} color={"text-primary"}>
                Enjoy a pool or a new deck
              </Heading2>
              <SubHeading font={"normal"}>
                Give yourself a place to relax and have fun every day.
              </SubHeading>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <Shapes />
            </div>
            <div>
              <Heading2 padding={"py-0 sm:py-1"} color={"text-primary"}>
                Install energy efficient appliances
              </Heading2>
              <SubHeading font={"normal"}>
                Lower your utility bills with solar panels, new washers, dryers,
                refrigerators, and more.
              </SubHeading>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <Shapes />
            </div>
            <div>
              <Heading2 padding={"py-0 sm:py-1"} color={"text-primary"}>
                Increase your home value
              </Heading2>
              <SubHeading font={"normal"}>
                Invest now with the help of a home improvement loan and boost
                your equity.
              </SubHeading>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="pt-1">
              <Shapes />
            </div>
            <div>
              <Heading2 padding={"py-0 sm:py-1"} color={"text-primary"}>
                Redecorate your home
              </Heading2>
              <SubHeading font={"normal"}>
                Freshen up your furnishings, rethink your color scheme, or
                redesign your lighting.
              </SubHeading>
            </div>
          </div>
        </div>
        <div className="hidden sm:block w-full sm:w-1/2 px-6 mb-4 sm:mb-0 sm:px-0">
          <img
            src={Possibility}
            alt="peer illustrator"
            className="object-cover rounded-md m-auto w-11/12"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default Possibilities;
