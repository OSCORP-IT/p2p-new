import Text from "../../components/Text";

function Tab({ activeTab, index, children, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${
        activeTab === index ? "bg-white" : ""
      } rounded-md px-4 py-1.5 cursor-pointer`}
    >
      <Text
        font={`font-semibold`}
        color={activeTab === index ? "titleColor" : "textColor3"}
      >
        {children}
      </Text>
    </div>
  );
}

export default Tab;
