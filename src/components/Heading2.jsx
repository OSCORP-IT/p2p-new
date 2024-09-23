function Heading2({ children, color }) {
  return (
    <h2
      className={`${
        color ? `text-${color}` : "text-titleColor"
      } text-lg sm:text-xl md:text-2xl font-semibold`}
    >
      {children}
    </h2>
  );
}

export default Heading2;
