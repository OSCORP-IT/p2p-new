function SmallText({ children, color, align }) {
  return (
    <h2
      className={`${color ? `text-${color}` : "text-black"}  ${
        align ? `${align}` : "text-left"
      } text-[10px] sm:text-xs font-normal`}
    >
      {children}
    </h2>
  );
}

export default SmallText;
