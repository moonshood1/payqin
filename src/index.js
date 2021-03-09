import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/containers/Navbar";
import Footer from "./components/containers/Footer";
import reportWebVitals from "./reportWebVitals";
import { Animated } from "react-animated-css";
//import App from "./App";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: 0,
      wrapperStyle: {
        display: "none",
      },
      panelStyle: {
        background: this.props.data[0].colour,
      },
      buttonHover: false,
      buttonStyle: {
        color: "#ffffff",
      },
      buttonDownloadStyle: {
        height: "50px",
        width: "162px",
      },
    };
  }
  _changeContent(id) {
    this.setState({
      activeID: id,
      panelStyle: {
        display: "none",
      },
      wrapperStyle: {
        display: "flex",
      },
    });
  }
  _changeActive(id) {
    this.setState({
      activeID: id,
      wrapperStyle: {
        display: "none",
      },
      panelStyle: {
        backgroundColor: this.props.data[id].colour,
      },
    });
  }
  _buttonColour() {
    if (!this.state.buttonHover) {
      this.setState({
        buttonHover: true,
        buttonStyle: {
          color: this.props.data[this.state.activeID].colour,
        },
      });
    } else {
      this.setState({
        buttonHover: false,
        buttonStyle: {
          color: "#ffffff",
        },
      });
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <section className="wrapper">
          <Selectors
            data={this.props.data}
            activeID={this.state.activeID}
            _changeActive={this._changeActive.bind(this)}
            _changeContent={this._changeContent.bind(this)}
          />
          <Panel
            data={this.props.data[this.state.activeID]}
            panelStyle={this.state.panelStyle}
            wrapperStyle={this.state.wrapperStyle}
            buttonStyle={this.state.buttonStyle}
            _buttonColour={this._buttonColour.bind(this)}
            activeID={this.state.activeID}
            _changeActive={this._changeActive.bind(this)}
            _changeContent={this._changeContent.bind(this)}
          />
        </section>
        <Footer />
      </div>
    );
  }
}

class Panel extends React.Component {
  _changeOnScroll(e) {
    var actual = this.props.data.id;
    var delta = e.deltaY;
    /* 1er cas , il scroll vers le haut quand lélément actif est 0 */
    if (delta < 0 && actual == 0) {
      this.props._changeActive(actual);
    }
    /* 2e cas , il scroll vers le bas quand lélément actif est 0 */
    if (delta > 0 && actual == 0) {
      this.props._changeActive(actual + 1);
    }
    /* 3e cas , il scroll vers le haut quand lélément actif est different de 0 */
    if (delta < 0 && actual != 0) {
      this.props._changeActive(actual - 1);
    }
    /* 4e cas , il scroll vers le bas quand lélément actif est different de 0 */
    if (delta > 0 && actual != 0 && actual != 3) {
      this.props._changeActive(actual + 1);
    }
    /* 5e cas , il scroll vers le bas quand l'élément actif est juste avant le dernier */
    if (delta > 0 && actual == 2) {
      this.props._changeContent(actual + 1);
    }
    /* 6e cas , il scroll vers le bas quand lélément actif est le dernier(4) */
    if (delta > 0 && actual == 3) {
      this.props._changeContent(actual);
    }
  }
  render() {
    return (
      <div>
        <div
          className="otherPanel container-fluid"
          style={this.props.wrapperStyle}
          onWheel={this._changeOnScroll.bind(this)}
        >
          <div className="row">
            <div className="col-lg-12">
              <img
                src={this.props.data.cover_url}
                alt=""
                className="otherPanel-img"
              />
              <h2 className="otherPanel-header">{this.props.data.header}</h2>
              <p className="otherPanel-info">{this.props.data.body}</p>
              <p>
                <a href="#" className="otherPanel-link">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <aside
          className="panel"
          style={this.props.panelStyle}
          onWheel={this._changeOnScroll.bind(this)}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <Animated
                  animationIn="fadeIn"
                  animationOut="slideOutUp"
                  animationInDuration="2500"
                >
                  <h2 className="panel-header">{this.props.data.header}</h2>
                </Animated>
                <Animated animationIn="fadeInLeft" animationInDuration="2000">
                  <p className="panel-info">{this.props.data.body}</p>
                </Animated>
                <div className="panel-buttons">
                  <a href="https://apple.com">
                    <img
                      src="https://res.cloudinary.com/dhc0siki5/image/upload/v1613380920/payqin/app_store_grarw1.png"
                      alt=""
                      width="162px"
                    />
                  </a>
                  <a href="https://play.google.com">
                    <img
                      src="https://res.cloudinary.com/dhc0siki5/image/upload/v1613380921/payqin/google_play_ohlmc7.png"
                      alt=""
                      width="162px"
                      height="70px"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <Animated animationIn="fadeIn" animationInDuration="4000">
                  <img
                    src={this.props.data.img}
                    alt=""
                    className="panel-image"
                  />
                </Animated>
              </div>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

class Selectors extends React.Component {
  _handleClick(e) {
    if (this.props.id !== this.props.activeID) {
      this.props._changeActive(this.props.id);
      if (this.props.id == 3) {
        this.props._changeContent(this.props.id);
      }
    } else {
      return;
    }
  }
  render() {
    return (
      <div className="selectors">
        {this.props.data.map((item) => (
          <Selector
            key={item.id}
            id={item.id}
            _handleClick={this._handleClick}
            _changeActive={this.props._changeActive}
            _changeContent={this.props._changeContent}
            activeID={this.props.activeID}
          />
        ))}
      </div>
    );
  }
}

class Selector extends React.Component {
  render() {
    let componentClass = "selector";
    if (this.props.activeID === this.props.id) {
      componentClass = "selector active";
    }
    return (
      <div
        className={componentClass}
        onClick={this.props._handleClick.bind(this)}
      ></div>
    );
  }
}

const data = [
  {
    id: 0,
    header: "We’re not a Bank, We’re better",
    body:
      "A safe and secure environment for your internet transactions anywhere in the world",
    colour: "#fff",
    img:
      "https://res.cloudinary.com/dhc0siki5/image/upload/v1615285675/payqin/img_1_gvbbmu.png",
  },
  {
    id: 1,
    header: "You like it Virtual Or Physical ?",
    body: "You like it virtual or Physical ? We got both for you",
    colour: "#F9F9F9",
    img:
      "https://res.cloudinary.com/dhc0siki5/image/upload/v1615285677/payqin/img_3_z75izi.png",
  },
  {
    id: 2,
    header: "Buy and Sell Crypto",
    body:
      "PayQin is the fastest app to convert your money into bitcoin buying and selling. We got you covered",
    colour: "#F9F9F9",
    img:
      "https://res.cloudinary.com/dhc0siki5/image/upload/v1615285674/payqin/img_2_aexup4.png",
  },
  {
    id: 3,
    header: "Transfer & Merchant Payment",
    body: "Send and Receive Money Instantly",
    colour: "#513B56",
    cover_url:
      "https://res.cloudinary.com/dhc0siki5/image/upload/v1613483076/payqin/world_map_fyymxn.jpg",
    cover_colour: "#242846",
  },
];

ReactDOM.render(<App data={data} />, document.querySelector("#root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
