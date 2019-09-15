import React from 'react';
import PropTypes from 'prop-types';

function paginationitem(props) {
  return (
    <li className={`page-item ${props.state} `}>
      <a className="page-link" href={props.link}>
        {props.name}
      </a>
    </li>
  );
}

paginationitem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default paginationitem;
