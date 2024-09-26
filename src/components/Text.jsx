function Text({ children, color, align, padding }) {
  return (
    <h2
      className={`${color ? `text-${color}` : "text-black"} ${
        align ? `${align}` : "text-left"
      } ${padding ? `${padding}` : "py-1"} text-base sm:text-sm font-normal`}
    >
      {children}
    </h2>
  );
}

export default Text;
