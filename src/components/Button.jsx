import "../css/Button.css";
function Button({ count, color, onClick }) {
  return (
    <button
      style={{
        background: color,
      }}
      className="btn"
      onClick={onClick}
    >
      Button {count}
    </button>
  );
}

export default Button;
