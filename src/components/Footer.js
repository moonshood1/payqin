import React from "react";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <footer className="footer mt-2" style={{ height: "50px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center col-md-3">
              <img
                src="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
                alt=""
                className="footer_img"
                style={{
                  maxHeight: "25px",
                  maxWidth: "110px",
                  marginLeft: "110px",
                }}
              />
            </div>
            <div className="col-12 mt-2 text-center col-md-6 ">
              <a href="#" className="footer_link_styled">
                About
              </a>
              <a href="#" className="footer_link_styled">
                Blog
              </a>
              <a href="#" className="footer_link_styled">
                help
              </a>
              <a href="#" className="footer_link_styled">
                Legal Notice
              </a>
              <a
                href="https://ambassadeur.payqin.com/#/"
                className="footer_link_styled"
              >
                PayQin Ambassadors
              </a>
            </div>
            <div className="col-12 mt-2 text-center col-md-3">
              <a href="https://facebook.com" className="footer_icon_style">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="footer_icon_style">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="footer_icon_style">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline footer_button">
                Contact Us
              </a>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-12">
              <p
                className="text-center"
                style={{
                  color: "#888888",
                  fontSize: "12px",
                  marginBottom: "0px",
                }}
              >
                PayQin © 2021 All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
