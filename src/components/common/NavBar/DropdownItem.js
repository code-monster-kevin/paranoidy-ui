import React from 'react';
import PropTypes from "prop-types";

const dropdownitem = props => {
  return (
    <a className="dropdown-item" href={props.link}>
      {props.name}
    </a>
  );
};

dropdownitem.PropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default dropdownitem;
