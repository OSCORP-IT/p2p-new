function Heading2({ children, color, align, padding }) {
  return (
    <h2
      className={`${color ? `${color}` : "text-titleColor"} ${
        align ? `${align}` : "text-left"
      } ${
        padding ? `${padding}` : "py-1"
      } text-lg sm:text-xl tab:text-2xl font-semibold`}
    >
      {children}
    </h2>
  );
}

export default Heading2;
