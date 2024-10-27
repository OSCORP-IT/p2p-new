import SectionLayout from "../../ui/SectionLayout";
import Quote from "../../icon/Quote";
import SubTitle from "../../components/SubTitle";
function SingleQuote() {
  return (
    <SectionLayout>
      <div className="w-max m-auto">
        <Quote color={`#0d5152`} />
      </div>
      <div className="w-11/12 m-auto py-4">
        <SubTitle align={`text-center`} font={`font-normal`}>
          Prosper is always there when I need a lending hand. I am grateful for
          being able to get a loan from your business. When [it] gets tough for
          me to take care of my financial problems, you are there to lend a
          hand.
        </SubTitle>
        <SubTitle
          align={`text-center italic`}
          padding={`pt-3`}
          font={`font-medium`}
        >
          —Emerita S, May 2022
        </SubTitle>
      </div>
    </SectionLayout>
  );
}

export default SingleQuote;
