function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text"
}) {
  return (
    <div className="mb-3">
      <label>{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
}

export default Input;