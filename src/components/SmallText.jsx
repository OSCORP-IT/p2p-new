function SmallText({ children, color, align, padding }) {
  return (
    <h2
      className={`${color ? `text-${color}` : "text-black"}  ${
        align ? `${align}` : "text-left"
      } ${padding ? padding : "py-1"} text-[10px] sm:text-xs font-normal`}
    >
      {children}
    </h2>
  );
}

export default SmallText;
