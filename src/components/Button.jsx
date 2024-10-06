function Button({ children, color, bg, margin }) {
  return (
    <button
      className={`flex gap-2 items-center py-1.5 px-10 ${
        color ? `text-${color}` : "text-white"
      } ${bg ? `bg-${bg}` : "bg-primary"} ${
        margin ? `${margin}` : "m-0"
      } rounded-md text-sm sm:text-15[px] tab:text-base font-semibold capitalize`}
    >
      <p>{children}</p>
    </button>
  );
}

export default Button;
