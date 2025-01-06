import React, { Component } from "react";
import { Fade, Flip } from "react-reveal";
import "./DegreeCard.css";

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

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.9)",
                }}
                src={require(`../../assets/images/${degree.logo_path}`)}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        )}
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{ width: degree.logo_path ? "90%" : "100%" }}
          >
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {degree.descriptions.map((sentence) => {
                return (
                  <p className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })}
              {degree.website_link && (
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{
                      color: theme.body,
                      backgroundColor: theme.text,
                      border: `solid 1px ${theme.text}`,
                    }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.text, theme.body)
                    }
                    onMouseOut={(event) =>
                      onMouseOut(event, theme.body, theme.text)
                    }
                  >
                    Visitar Site
                  </div>
                </a>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
