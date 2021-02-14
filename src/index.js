import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";
//import App from "./App";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: 0,
      wrapperStyle: {
        backgroundImage: `url('${this.props.data[0].img}')`,
      },
      panelStyle: {
        background: this.props.data[0].colour,
      },
      buttonHover: false,
      buttonStyle: {
        color: "#ffffff",
      },
    };
  }
  _changeActive(id) {
    this.setState({
      activeID: id,
      wrapperStyle: {
        backgroundImage: `url('${this.props.data[id].img}')`,
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
        <section className="wrapper" style={this.state.wrapperStyle}>
          <Selectors
            data={this.props.data}
            activeID={this.state.activeID}
            _changeActive={this._changeActive.bind(this)}
          />
          <Panel
            data={this.props.data[this.state.activeID]}
            panelStyle={this.state.panelStyle}
            buttonStyle={this.state.buttonStyle}
            _buttonColour={this._buttonColour.bind(this)}
          />
        </section>
        <Footer />
      </div>
    );
  }
}

class Panel extends React.Component {
  render() {
    return (
      <aside className="panel" style={this.props.panelStyle}>
        <h2 className="panel-header">{this.props.data.header}</h2>
        <p className="panel-info">{this.props.data.body}</p>
        <button
          className="panel-button"
          style={this.props.buttonStyle}
          onMouseEnter={this.props._buttonColour}
          onMouseLeave={this.props._buttonColour}
        >
          Read More
        </button>
      </aside>
    );
  }
}

class Selectors extends React.Component {
  _handleClick(e) {
    if (this.props.id !== this.props.activeID) {
      this.props._changeActive(this.props.id);
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
    colour: "#242846",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc1.jpg",
  },
  {
    id: 1,
    header: "You like it Virtual Or Physical ?",
    body: "You like it virtual or Physical ? We got both for you",
    colour: "#ba9077",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc2.jpg",
  },
  {
    id: 2,
    header: "Insurance",
    body: "Building the most innovative Insurance platform for Africa",
    colour: "#1ABC9C",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc3.jpg",
  },
  {
    id: 3,
    header: "Buy and Sell Crypto",
    body:
      "PayQin is the fastest app to convert your money into bitcoin buying and selling. We got you covered",
    colour: "#C0392B",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc4.jpg",
  },
  {
    id: 4,
    header: "Transfer & Merchant Payment",
    body: "Send and Receive Money Instantly",
    colour: "#513B56",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc5.jpg",
  },
];

ReactDOM.render(<App data={data} />, document.querySelector("#root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
