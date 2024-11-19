import React from "react";
import PropTypes from "prop-types";

const Loader = ({ className = "", fallback = false }) => {
  return (
    <React.Fragment>
      {fallback && (
        <div id="loading" className={`loadingmain ${className}`}>
          <div className="loading">
            <div className="loading-content"></div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default React.memo(Loader);
