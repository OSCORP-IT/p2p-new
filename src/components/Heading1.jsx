function Heading1({ children, color, align, padding }) {
  return (
    <h1
      className={`${color ? `${color}` : "text-primary"} ${
        align ? `${align}` : "text-left"
      } ${
        padding ? `${padding}` : "py-1"
      } text-2xl sm:text-[32px] tab:text-[35px] laptop:text-[40px] font-semibold`}
    >
      {children}
    </h1>
  );
}

export default Heading1;
