import React from "react";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <footer className="footer mt-2" style={{ height: "50px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
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
            <div className="col-md-6 ">
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
              <a href="#" className="footer_link_styled">
                PayQin Ambassadors
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="footer_icon_style"></a>
              <a href="#" className="footer_icon_style"></a>
              <a href="#" className="footer_icon_style"></a>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-12">
              <p
                className="text-center"
                style={{ color: "#888888", fontSize: "12px" }}
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
