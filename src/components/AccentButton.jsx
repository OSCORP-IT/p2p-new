import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function AccentButton({ children, noIcon, leftIcon }) {
  return (
    <button className=" capitalize flex gap-2 items-center py-2 px-10 text-accent bg-white border border-accent rounded-md text-sm sm:text-base font-semibold">
      {!noIcon && leftIcon && <GoArrowLeft className="font-semibold text-lg" />}
      <p>{children}</p>
      {!noIcon && !leftIcon && (
        <GoArrowRight className="font-semibold text-lg" />
      )}
    </button>
  );
}

export default AccentButton;
