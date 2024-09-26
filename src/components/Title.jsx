function Title({ children, color, align }) {
  return (
    <h1
      className={`${color ? `text-${color}` : "text-titleColor"} ${
        align ? `text-${align}` : "text-left"
      } text-[28px] sm:text-[35px] tab:text-4xl laptop:text-5xl font-semibold leading-tight tab:leading-normal`}
    >
      {children}
    </h1>
  );
}

export default Title;
