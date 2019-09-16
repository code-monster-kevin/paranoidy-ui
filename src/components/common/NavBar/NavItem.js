import React from 'react';
import PropTypes from 'prop-types';

function navitem(props) {
  return (
    <li className="nav-item text-capitalize">
      <a className="nav-link js-scroll-trigger" href={props.link}>
        {props.children}
      </a>
    </li>
  );
}

navitem.propTypes = {
  link: PropTypes.string.isRequired
};

export default navitem;
