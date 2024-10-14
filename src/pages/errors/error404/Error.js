import React, { Component } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import TopButton from "../../../components/topButton/TopButton";
import "./Error.css";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default class Error extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="error-main">
        <Header theme={this.props.theme} />
        <div className="error-class">
          <Fade bottom duration={2000} distance="40px">
            <h1>Ops...</h1>
            <h1 className="error-404">404</h1>
            <p>A página solicitada não está disponível no momento!</p>
            <Link
              className="main-button"
              to="/home"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
                display: "inline-flex",
              }}
              onMouseEnter={(event) =>
                onMouseEnter(event, theme.text, theme.body)
              }
              onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)}
            >
              Ir ao Início
            </Link>
          </Fade>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
