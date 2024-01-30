import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <span className="span-1">CSC</span>
        <span className="span-2">DRIVE</span>
      </div>
      <ul className="header-menu">
        <li>Home</li>
        <li>Level</li>
        <li>Contact</li>
      </ul>
      <form className="header-form">
        <input type="text" className="text" />
        {/* <input type="submit" className="login">login</input> */}
        <button className="login"><Link className="link" to='/login'>login</Link></button>
      </form>
    </div>
  );
}
