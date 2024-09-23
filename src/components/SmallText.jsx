function SmallText({ children, color }) {
  return (
    <h2
      className={`${
        color ? `text-${color}` : "text-black"
      } text-[10px] sm:text-xs font-normal`}
    >
      {children}
    </h2>
  );
}

export default SmallText;
