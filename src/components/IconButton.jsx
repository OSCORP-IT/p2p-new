function IconButton({ children, text }) {
  return (
    <button className=" capitalize flex gap-2 items-center py-2 px-4 text-white bg-primary rounded-md text-sm sm:text-15[px] tab:text-base font-semibold">
      <p>{text}</p>
      {children}
    </button>
  );
}

export default IconButton;
