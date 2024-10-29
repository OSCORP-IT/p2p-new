import { PiArrowBendDownRight } from "react-icons/pi";
import Text from "../../components/Text";
function ArrowBendCard({ text }) {
  return (
    <div className="flex items-center gap-2">
      <PiArrowBendDownRight className="text-accent font-bold text-xl" />
      <Text>{text}</Text>
    </div>
  );
}

export default ArrowBendCard;
