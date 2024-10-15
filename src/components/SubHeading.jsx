function SubHeading({ children, padding, color, font, align }) {
  console.log(`text-${color}`);
  return (
    <h3
      className={`${color ? `text-${color}` : "text-black"} ${
        align ? `${align}` : "text-left"
      } ${padding ? `${padding}` : "py-1"} text-base sm:text-lg tab:text-xl ${
        font ? `font-${font}` : "font-semibold"
      }`}
    >
      {children}
    </h3>
  );
}

export default SubHeading;
