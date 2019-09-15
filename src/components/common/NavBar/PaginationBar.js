import React from 'react';
import PropTypes from 'prop-types';

function paginationbar(props) {
  return (
    <nav aria-label={props.name}>
      <ul className="pagination">{props.children}</ul>
    </nav>
  );
}

paginationbar.propTypes = {
  name: PropTypes.string.isRequired
};

export default paginationbar;
