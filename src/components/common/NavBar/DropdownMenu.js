import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function dropdownmenu(props) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle text-capitalize"
        href="/"
        id={props.id}
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.faicon && <FontAwesomeIcon icon={props.faicon} />} {props.name}
      </a>
      <div className="dropdown-menu" aria-labelledby={props.id}>
        {props.children}
      </div>
    </li>
  );
}

dropdownmenu.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default dropdownmenu;
