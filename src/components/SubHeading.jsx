function SubHeading({ children, color, font, align }) {
  console.log(`text-${color}`);
  return (
    <h3
      className={`${color ? `text-${color}` : "text-black"} ${
        align ? `${align}` : "text-left"
      } text-base sm:text-lg tab:text-xl ${
        font ? `font-${font}` : "font-semibold"
      }`}
    >
      {children}
    </h3>
  );
}

export default SubHeading;
