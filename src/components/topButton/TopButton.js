import React, { useEffect } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    const topButton = document.getElementById("topButton");
    const arrow = document.getElementById("arrow");

    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      topButton.style.visibility = "visible";
      arrow.style.visibility = "visible";
    } else {
      topButton.style.visibility = "hidden";
      arrow.style.visibility = "hidden";
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  const onMouseEnter = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title=""
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
}
