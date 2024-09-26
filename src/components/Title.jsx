function Title({ children, color, align, padding }) {
  console.log(align);
  return (
    <h1
      className={`${color ? `text-${color}` : "text-titleColor"} ${
        align ? `${align}` : "text-left"
      } ${
        padding ? `${padding}` : "py-1"
      } text-[28px] sm:text-[35px] tab:text-4xl laptop:text-5xl font-semibold leading-tight tab:leading-normal`}
    >
      {children}
    </h1>
  );
}

export default Title;
