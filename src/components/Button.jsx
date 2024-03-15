function Button({ count, color, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      Button {count}
    </button>
  );
}

export default Button;
