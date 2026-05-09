function Button({ children, onClick, type = "button", style }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "8px 12px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export default Button;