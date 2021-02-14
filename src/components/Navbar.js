import React from "react";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ height: "40px", marginBottom: "10px" }}
      >
        <a className="navbar-brand" href="#">
          <img
            src="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
            alt=""
            className="navbar-logo navbar_logo_style"
            style={{
              maxHeight: "25px",
              maxWidth: "110px",
              marginLeft: "110px",
            }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" style={{ fontSize: "17px" }}>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle navbar_link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "#222222" }}
              >
                Products
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ color: "#222222", fontSize: "14px" }}
                >
                  PayQin Cards
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ color: "#222222", fontSize: "14px" }}
                >
                  Insurance
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ color: "#222222", fontSize: "14px" }}
                >
                  Crypto
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ color: "#222222", fontSize: "14px" }}
                >
                  Download
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link navbar_link"
                style={{ color: "#222222" }}
              >
                Developers
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link navbar_link"
                style={{ color: "#222222" }}
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
