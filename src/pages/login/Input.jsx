function Input({ width, type, name, placeholder }) {
  return (
    <div className={`${width ? width : "w-full"}`}>
      <input
        type={type}
        name={name}
        id={name}
        className="p-2 tab:p-3 w-full border border-gray-400 rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
