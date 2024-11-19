import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const SecondaryButton = ({
  bgc,
  className,
  color,
  paddingright,
  type,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={` ${className} button-link`}
      style={{
        backgroundColor: bgc,
        paddingRight: paddingright,
        color: color,
      }}
      type={type}
    >
      {props.children}
    </Button>
  );
};

SecondaryButton.defaultProps = {
  className: "",
  type: "button",
};

SecondaryButton.propTypes = {
  className: PropTypes.string,
  bgc: PropTypes.string,
  paddingright: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
};

export default React.memo(SecondaryButton);
