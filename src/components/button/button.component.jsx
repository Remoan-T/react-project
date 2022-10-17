import React from "react";
import "./button.styles.scss";

const BUTTON_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ buttonType, children, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_CLASS[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
