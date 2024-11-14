function Input({ width, type, name, placeholder, value, onChange }) {
  return (
    <div className={`${width ? width : "w-full"}`}>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="p-2 tab:p-3 w-full border border-gray-400 rounded-md"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Input;
