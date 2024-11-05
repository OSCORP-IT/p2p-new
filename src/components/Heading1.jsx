function Heading1({ children, color, align, padding, font }) {
  return (
    <h1
      className={`${color ? `${color}` : "text-primary"} ${
        align ? `${align}` : "text-left"
      } ${padding ? `${padding}` : "py-1"} ${
        font ? `${font}` : "font-semibold"
      } text-2xl sm:text-[32px] tab:text-[38px] laptop:text-[40px]`}
    >
      {children}
    </h1>
  );
}

export default Heading1;
