function Text({ children, color }) {
  return (
    <h2
      className={`${
        color ? `text-${color}` : "text-black"
      } text-base md:text-sm font-normal`}
    >
      {children}
    </h2>
  );
}

export default Text;
