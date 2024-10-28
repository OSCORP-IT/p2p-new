import { GoArrowRight } from "react-icons/go";

function AccentButton({ children, noIcon }) {
  return (
    <button className=" capitalize flex gap-2 items-center py-2 px-10 text-accent bg-white border border-accent rounded-md text-sm sm:text-base font-semibold">
      <p>{children}</p>
      {!noIcon && <GoArrowRight className="font-semibold text-lg" />}
    </button>
  );
}

export default AccentButton;
