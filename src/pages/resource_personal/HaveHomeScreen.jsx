import SubHeading from "../../components/SubHeading";
import { useState } from "react";
import Text from "../../components/Text";
import Heading2 from "../../components/Heading2";
function HaveHomeScreen({ setPage }) {
  const [haveHome, setHaveHome] = useState(true);
  function handleclick(value) {
    setHaveHome(value);
    setPage(5);
  }
  return (
    <div className="bg-white rotate-[8deg] rounded-[15px] p-[20px]">
      <Text align={`text-center`} color={`accent`} padding={`pb-2`}>
        5/5
      </Text>
      <Heading2
        align={`text-center`}
        font={`font-normal`}
        padding={`pt-1 pb-4`}
      >
        Do you own or rent your home?
      </Heading2>
      <div className="p-4">
        <div
          className={`w-[90%] m-auto p-3 rounded-md ${
            haveHome ? "bg-primary/20" : "bg-accent/20"
          } cursor-pointer hover:bg-primary/20`}
          onClick={() => handleclick(true)}
        >
          <SubHeading align={`text-center`}>Own</SubHeading>
        </div>
        <div
          className={`w-[90%] mt-6 m-auto p-3 rounded-md ${
            !haveHome ? "bg-primary/20" : "bg-accent/20"
          } cursor-pointer hover:bg-primary/20`}
          onClick={() => handleclick(false)}
        >
          <SubHeading align={`text-center`}>Rent</SubHeading>
        </div>
      </div>
    </div>
  );
}

export default HaveHomeScreen;
