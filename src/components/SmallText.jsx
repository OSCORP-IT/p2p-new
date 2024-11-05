function SmallText({ children, color, align, padding, font }) {
  return (
    <h2
      className={`${color ? `text-${color}` : "text-black"}  ${
        align ? `${align}` : "text-left"
      } ${padding ? padding : "py-1"} ${
        font ? font : "font-normal"
      } text-[10px] sm:text-xs`}
    >
      {children}
    </h2>
  );
}

export default SmallText;
