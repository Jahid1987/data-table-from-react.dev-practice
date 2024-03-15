import PropTypes from "prop-types";
function Button({ count, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      Button {count}
    </button>
  );
}
Button.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
export default Button;
