import React from 'react';
import PropTypes from 'prop-types';

function dropdownitem(props) {
  return (
    <a className="dropdown-item" href={props.link}>
      {props.children}
    </a>
  );
}

dropdownitem.propTypes = {
  link: PropTypes.string.isRequired
};

export default dropdownitem;
