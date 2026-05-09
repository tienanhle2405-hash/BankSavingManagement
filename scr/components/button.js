function Button({ title, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn btn-primary"
    >
      {title}
    </button>
  );
}

export default Button;