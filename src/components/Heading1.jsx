function Heading1({ children, color }) {
  return (
    <h1
      className={`${
        color ? `text-${color}` : "text-primary"
      } text-2xl sm:text-[32px] tab:text-[40px] font-semibold`}
    >
      {children}
    </h1>
  );
}

export default Heading1;
