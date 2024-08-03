import PropTypes from "prop-types";
import React from "react";

const Breadcrumb = ({ pageTitle }) => {
  return (
    <div className="breadcrumb-area space-pt--5 space-pb--25">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="page-title">{pageTitle}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  pageTitle: PropTypes.string,
  prevUrl: PropTypes.string
};

export default Breadcrumb;
