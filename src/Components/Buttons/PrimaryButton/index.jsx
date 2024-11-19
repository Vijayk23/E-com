import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const PrimaryButton = ({
  bgc,
  className,
  paddingright,
  color,
  children,
  type,
  ...props
}) => {
  return (
    <Button
      className={`${className} button-primary`}
      style={{
        backgroundColor: bgc,
        paddingRight: paddingright,
        color: color,
      }}
      type={type}
      {...props}
    >
      {children}
    </Button>
  );
};

PrimaryButton.defaultProps = {
  className: "",
  type: "button",
};

PrimaryButton.propTypes = {
  bgc: PropTypes.string,
  paddingright: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
};

export default React.memo(PrimaryButton);
