import { GoArrowDownRight } from "react-icons/go";

function PrimaryButton({ children, bg }) {
  return (
    <button
      className={`capitalize flex gap-2 items-center py-2 px-8 text-white ${
        bg ? `bg-${bg}` : "bg-primary"
      } rounded-md text-sm sm:text-15[px] tab:text-base font-semibold`}
    >
      <p>{children}</p>
      <GoArrowDownRight className="font-semibold text-lg" />
    </button>
  );
}

export default PrimaryButton;
