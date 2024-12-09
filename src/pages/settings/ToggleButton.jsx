import SubHeading from "../../components/SubHeading";
import SmallText from "../../components/SmallText";

const ToggleButton = ({ label, description, enabled, onToggle }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <SubHeading color="textColor4" padding={`py-0`} font={`semibold`}>
          {label}
        </SubHeading>
        <SmallText color="textColor3">{description}</SmallText>
      </div>
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
          enabled ? "bg-textColor4" : "bg-gray-300"
        } transition-colors duration-300`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        ></span>
      </button>
    </div>
  );
};
export default ToggleButton;
