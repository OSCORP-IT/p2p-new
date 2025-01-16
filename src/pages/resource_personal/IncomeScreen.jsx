import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
import Heading2 from "../../components/Heading2";
function IncomeScreen({ setPage, data, setData }) {
  function handleclick(value) {
    setData({ ...data, income_source: value });
    setPage(4);
  }
  return (
    <div className="bg-white rotate-[8deg] rounded-[15px] p-[20px]">
      <Text align={`text-center`} color={`accent`} padding={`pb-2`}>
        3/5
      </Text>
      <Heading2 align={`text-center`} font={`font-normal`}>
        How do you earn your income?
      </Heading2>
      <div className="p-4 flex items-center gap-4 flex-wrap">
        <div
          className={`w-[48%] p-3 rounded-md ${
            data.income_source === "Employed" ? "bg-primary/20" : "bg-accent/20"
          } cursor-pointer hover:bg-primary/20`}
          onClick={() => handleclick("Employed")}
        >
          <SubHeading align={`text-center`}>Employed</SubHeading>
        </div>
        <div
          className={`w-[48%] p-3 rounded-md ${
            data.income_source === "Self-Employed"
              ? "bg-primary/20"
              : "bg-accent/20"
          } cursor-pointer hover:bg-primary/20`}
          onClick={() => handleclick("Self-Employed")}
        >
          <SubHeading align={`text-center`}>Self-Employed</SubHeading>
        </div>
        <div
          className={`w-[48%] p-3 rounded-md ${
            data.income_source === "Retired" ? "bg-primary/20" : "bg-accent/20"
          } cursor-pointer hover:bg-primary/20`}
          onClick={() => handleclick("Retired")}
        >
          <SubHeading align={`text-center`}>Retired</SubHeading>
        </div>
        <div
          className={`w-[48%] p-3 rounded-md ${
            data.income_source === "Other" ? "bg-primary/20" : "bg-accent/20"
          } cursor-pointer hover:bg-primary/20`}
          onClick={() => handleclick("Other")}
        >
          <SubHeading align={`text-center`}>Others</SubHeading>
        </div>
      </div>
    </div>
  );
}

export default IncomeScreen;
