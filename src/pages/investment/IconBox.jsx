import Heading2 from "../../components/Heading2";
import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
function IconBox({
  heading,
  text,
  children,
  width,
  headingCase,
  padding,
  smallerTitle,
  border,
}) {
  return (
    <div
      className={`${padding ? padding : "p-4"} rounded-md h-auto sm:h-full ${
        width ? width : "w-[48%] sm:w-1/4"
      } bg-white ${
        border ? "border border-gray-300" : "shadow-allSide shadow-gray-200"
      }`}
    >
      {children}
      {!smallerTitle && (
        <Heading2
          padding={"py-2"}
          align={`text-center ${headingCase ? headingCase : ""}`}
        >
          {heading}
        </Heading2>
      )}
      {smallerTitle && (
        <SubHeading
          padding={"py-2"}
          align={`text-center ${headingCase ? headingCase : ""}`}
        >
          {heading}
        </SubHeading>
      )}
      <Text align={"text-center"}>{text}</Text>
    </div>
  );
}

export default IconBox;
