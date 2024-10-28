function Text({ children, color, align, padding, font }) {
  return (
    <h2
      className={`${color ? `text-${color}` : "text-black"} ${
        align ? `${align}` : "text-left"
      } ${padding ? `${padding}` : "py-1"} text-sm sm:text-base ${
        font ? font : "font-normal"
      }`}
    >
      {children}
    </h2>
  );
}

export default Text;
