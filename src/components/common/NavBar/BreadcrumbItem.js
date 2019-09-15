import React from 'react';
import PropTypes from 'prop-types';
import './BreadcrumbItem.css';

function breadcrumbitem(props) {
  if (props.isCurrentPage) {
    return (
      <li className="breadcrumb-item active" aria-current="page">
        {props.name}
      </li>
    );
  } else {
    return (
      <li className="breadcrumb-item">
        {props.link ? <a href={props.link}>{props.name}</a> : props.name}
      </li>
    );
  }
}

breadcrumbitem.propTypes = {
  name: PropTypes.string.isRequired,
  isCurrentPage: PropTypes.bool.isRequired
};

breadcrumbitem.defaultProps = {
  isCurrentPage: false
};

export default breadcrumbitem;
