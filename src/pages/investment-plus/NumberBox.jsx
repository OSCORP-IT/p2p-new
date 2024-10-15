import TreeStructure from "../../icon/TreeStructure";
import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
function NumberBox({ number, text }) {
  return (
    <div className="w-full sm:w-1/3 shadow-allSide shadow-gray-200 sm:h-[320px] tab:h-[280px] rounded-xl relative overflow-hidden p-6">
      <div className="w-[120px] h-[120px] tab:w-[150px] tab:h-[145px] bg-accent rounded-full absolute -top-14 am:-top-12 -right-4 sm:-right-6 tab:-right-4"></div>
      <div className="flex gap-2 items-center justify-start">
        <TreeStructure />
        <Title color={"text-primary"}>{number}</Title>
      </div>
      <SubHeading padding={"py-3"}>{text}</SubHeading>
    </div>
  );
}

export default NumberBox;
