function SubHeading({ children, color }) {
  return (
    <h3
      className={`${
        color ? `text-${color}` : "text-black"
      } text-base sm:text-lg md:text-xl font-semibold`}
    >
      {children}
    </h3>
  );
}

export default SubHeading;
