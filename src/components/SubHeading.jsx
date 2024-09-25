function SubHeading({ children, color, font }) {
  return (
    <h3
      className={`${
        color ? `text-${color}` : "text-black"
      } text-base sm:text-lg md:text-xl ${
        font ? `font-${font}` : "font-semibold"
      } py-2`}
    >
      {children}
    </h3>
  );
}

export default SubHeading;
