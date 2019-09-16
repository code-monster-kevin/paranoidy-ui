import React from 'react';
import PropTypes from 'prop-types';

function paginationbar(props) {
  return (
    <div className="container">
      <nav aria-label={props.name}>
        <ul className="pagination">{props.children}</ul>
      </nav>
    </div>
  );
}

paginationbar.propTypes = {
  name: PropTypes.string.isRequired
};

export default paginationbar;
