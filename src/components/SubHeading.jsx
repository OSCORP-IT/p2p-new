function SubHeading({ children, color, font, align }) {
  return (
    <h3
      className={`${color ? `text-${color}` : "text-black"} ${
        align ? `text-${align}` : "text-left"
      } text-base sm:text-lg tab:text-xl ${
        font ? `font-${font}` : "font-semibold"
      } py-2 capitalize`}
    >
      {children}
    </h3>
  );
}

export default SubHeading;
