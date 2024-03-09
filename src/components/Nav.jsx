import "../css/Nav.css";
function Nav() {
  return (
    <div className="nav">
      <h3>Home</h3>
      <ul className="nav-links">
        <li>
          <a>User</a>
        </li>
        <li>
          <a>Log in</a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
