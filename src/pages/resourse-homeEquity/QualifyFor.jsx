import SectionLayout from "../../ui/SectionLayout";
import bgHomeEq from "../../assets/bgHomeEq.jpeg";
import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
function QualifyFor() {
  return (
    <SectionLayout>
      <div
        className="sm:flex w-full rounded-[30px] sm:h-[400px] tab:h-[650px] bg-cover bg-center p-10 tab:p-[75px] items-end"
        style={{ backgroundImage: `url(${bgHomeEq})` }}
      >
        <div className="w-full sm:w-[55%]">
          <Heading1 color={`text-white`} align={`text-left leading-tight`}>
            See what you qualify for in minutes
          </Heading1>
          <Text color={`white`} padding={"pb-4"}>
            With no impact to your credit score.
          </Text>
          <button
            className={`capitalize flex gap-2 items-center py-2 px-10 text-white bg-gradient-to-r from-[#ff6b00] to-[#803600] rounded-md text-sm sm:text-15[px] tab:text-base font-semibold`}
          >
            get my rate
          </button>
        </div>
      </div>
    </SectionLayout>
  );
}

export default QualifyFor;
