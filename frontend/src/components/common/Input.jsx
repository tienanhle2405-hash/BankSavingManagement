function Input({ label, value, onChange, type = "text", placeholder }) {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <label style={{ display: "block", marginBottom: 4 }}>{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          width: "100%",
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 6,
        }}
      />
    </div>
  );
}

export default Input;