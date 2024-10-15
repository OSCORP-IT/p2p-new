import SectionLayout from "../../ui/SectionLayout";
import Graph from "../../assets/numbers.png";
import SubTitle from "../../components/SubTitle";
import SubHeading from "../../components/SubHeading";
function BarGraph() {
  return (
    <SectionLayout>
      <div className="w-full flex flex-wrap tab:flex-nowrap items-center gap-4">
        <div className="w-full tab:w-1/2 py-8">
          <img src={Graph} alt="bar chart" className=" object-cover" />
        </div>
        <div className="w-full tab:w-1/2 px-2 sm:px-4 tab:px-0">
          <SubTitle padding={"py-2"}>
            What will happen if the default amount exceeds the reserve fund?
          </SubTitle>
          <SubHeading font={"font-normal"}>
            In the unlikely event that there are a large number of defaults
            within a short period of time and the reserve fund is depleted, rest
            assured, CapBay will exercise the necessary recovery measures to
            return the principal and interest to the investors. The issuance of
            the new notes under CapBay Assure will be suspended until the
            coverage ratio is sufficient again.
          </SubHeading>
          <SubHeading font={"font-normal"} padding={"py-2"}>
            Total repayments made by the Reserve Fund: RM 0 (No defaults)
          </SubHeading>
          <SubHeading font={"font-normal"} padding={"py-3"}>
            For more details on CapBay Assure, check out our Frequently Asked
            Questions (FAQs) here
          </SubHeading>
        </div>
      </div>
    </SectionLayout>
  );
}

export default BarGraph;
