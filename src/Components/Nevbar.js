import React from "react";
import Logo from "../images/logo.svg";
import './style/Navbar.css';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
          <div className="container-fluid"></div>
        <Link className="Navbar__brand" to="">
          <img className="Navbar__barnd-logi" src={Logo} alt="Logo" />
          <span className="font-weight-light">Course</span>
          <span className="font-weight-bold">Conf</span>
        </Link>
      </div>
    );
  }
}
export default Navbar;
