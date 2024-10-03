function SubTitle({ children, color, padding, align }) {
  return (
    <h1
      className={`${color ? `text-${color}` : "text-title"} ${
        align ? `${align}` : "text-left"
      } ${
        padding ? `${padding}` : "py-1"
      } text-[22px] sm:text-[26px] tab:text-[32px] font-semibold`}
    >
      {children}
    </h1>
  );
}

export default SubTitle;
