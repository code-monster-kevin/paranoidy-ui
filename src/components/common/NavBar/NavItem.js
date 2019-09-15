import React from 'react';
import PropTypes from "prop-types";

function navitem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link js-scroll-trigger" href={props.link}>
        {props.name}
      </a>
    </li>
  );
};

navitem.PropTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default navitem;
