import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function AccentButton({
  children,
  noIcon,
  leftIcon,
  color,
  width,
  type,
  onClick,
  disabled,
}) {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      disabled={disabled}
      type={type ? type : "button"}
      className={`capitalize flex gap-2 items-center justify-center py-2 px-10 ${
        color ? `text-${color} border-${color}` : "text-accent border-accent"
      } bg-white border  rounded-md text-sm sm:text-base font-semibold ${
        width ? width : ""
      }`}
    >
      {!noIcon && leftIcon && <GoArrowLeft className="font-semibold text-lg" />}
      <p>{children}</p>
      {!noIcon && !leftIcon && (
        <GoArrowRight className="font-semibold text-lg" />
      )}
    </button>
  );
}

export default AccentButton;
