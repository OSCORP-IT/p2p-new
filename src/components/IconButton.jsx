function IconButton({ children, text, bg, border, borderColor, textColor }) {
  return (
    <button
      className={`capitalize flex gap-2 items-center justify-center py-2 px-8 ${
        textColor ? textColor : "text-white"
      } ${
        bg ? `bg-${bg}` : "bg-primary"
      } rounded-md text-sm sm:text-[15px] tab:text-base font-semibold ${
        border ? `border ${borderColor}` : ""
      }`}
    >
      <p>{text}</p>
      {children}
    </button>
  );
}

export default IconButton;
