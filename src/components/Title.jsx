function Title({ children, color }) {
  return (
    <h1
      className={`${
        color ? `text-${color}` : "text-titleColor"
      } text-[28px] sm:text-[38px] md:text-5xl font-semibold`}
    >
      {children}
    </h1>
  );
}

export default Title;
