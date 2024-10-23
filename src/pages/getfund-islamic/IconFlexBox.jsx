import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
function IconFlexBox({ children, width, height, bg, heading, text }) {
  return (
    <div
      className={`${width ? width : "w-full"} ${height ? height : ""} ${
        bg ? bg : "bg-white"
      } rounded-md shadow-md shadow-gray-200 p-5 tab:p-10 flex gap-6 items-start`}
    >
      {children}
      <div>
        <Heading2 color={`text-islamic`} padding={`py-0`}>
          {heading}
        </Heading2>
        <Text padding={`pt-2`} color={`black/70`}>
          {text}
        </Text>
      </div>
    </div>
  );
}

export default IconFlexBox;
