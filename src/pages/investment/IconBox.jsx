import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
function IconBox({ heading, text, children }) {
  return (
    <div className="p-4 rounded-md h-[280px] sm:h-full w-[48%] sm:w-1/4  bg-white shadow-allSide shadow-gray-200">
      {children}
      <Heading2 padding={"py-2"} align={"text-center"}>
        {heading}
      </Heading2>
      <Text align={"text-center"}>{text}</Text>
    </div>
  );
}

export default IconBox;
