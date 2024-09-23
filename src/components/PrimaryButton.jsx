import { GoArrowDownRight } from "react-icons/go";

function PrimaryButton({ children }) {
  return (
    <button className=" flex gap-2 items-center py-2 px-4 text-white bg-primary rounded-md text-sm sm:text-base font-semibold">
      <p>{children}</p>
      <GoArrowDownRight className="font-semibold text-lg" />
    </button>
  );
}

export default PrimaryButton;
