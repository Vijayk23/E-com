import React from "react";

const Button = (props) => {
  return (
    <button {...props} className={`button ${props.className}`}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  className: "",
};

export default React.memo(Button);
