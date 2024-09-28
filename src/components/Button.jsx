function Button({ children, color, bg }) {
  return (
    <button
      className={`flex gap-2 items-center py-1.5 px-10 ${
        color ? `text-${color}` : "text-white"
      } ${
        bg ? `bg-${bg}` : "bg-primary"
      } rounded-md text-sm sm:text-15[px] tab:text-base font-semibold`}
    >
      <p>{children}</p>
    </button>
  );
}

export default Button;
