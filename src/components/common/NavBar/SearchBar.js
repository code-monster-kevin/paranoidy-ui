import React from 'react';
import PropTypes from 'prop-types';

function searchbar(props) {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2 text-capitalize"
        type="text"
        placeholder={props.placeholder}
      ></input>
      <button className="btn btn-primary my-2 my-sm-0 text-capitalize">
        {props.button}
      </button>
    </form>
  );
}

searchbar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
};

searchbar.defaultProps = {
  placeholder: 'Search',
  button: 'Search'
};

export default searchbar;
