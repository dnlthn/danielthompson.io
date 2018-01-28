import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.css";
import "./output.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Daniel Thompson"
      meta={[
        { name: "description", content: "daniel thompson software developer" },
        { name: "keywords", content: "web developer" }
      ]}
    />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
