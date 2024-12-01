function Small({ children, color, align, padding, font }) {
  return (
    <h2
      className={`${color ? `text-${color}` : "text-black"}  ${
        align ? `${align}` : "text-left"
      } ${padding ? padding : "py-1"} ${
        font ? font : "font-semibold"
      } text-xs tab:text-sm`}
    >
      {children}
    </h2>
  );
}

export default Small;
