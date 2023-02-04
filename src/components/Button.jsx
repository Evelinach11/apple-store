import React from "react";
import PropTypes from "prop-types";

const Button = ({
  backgroundColor,
  size,
  animate,
  children,
  onClick,
  icon,
}) => {
  const btnBg = backgroundColor ? "bg-" + backgroundColor : "bg-main";

  const btnSize = size ? "btn-" + size : "";

  const btnAnimate = animate ? "btn-animate" : "";

  return (
    <button
      className={`btn ${btnBg} ${btnSize} ${btnAnimate}`}
      onClick={onClick ? () => onClick() : null}
    >
      <span className="btn__txt">{children}</span>
      {icon ? (
        <span className="btn__icon">
          <i className={`${icon} bx-tada`}></i>
        </span>
      ) : null}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  animate: PropTypes.bool,
  onclick: PropTypes.func,
};

export default Button;
