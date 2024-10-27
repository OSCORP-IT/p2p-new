function SubTitle({ children, color, padding, align, font }) {
  return (
    <h1
      className={`${color ? `${color}` : "text-title"} ${
        align ? `${align}` : "text-left"
      } ${padding ? `${padding}` : "py-1"} ${
        font ? `font-${font}` : "font-semibold"
      } text-[22px] sm:text-[26px] tab:text-[28px] laptop:text-[32px] `}
    >
      {children}
    </h1>
  );
}

export default SubTitle;
