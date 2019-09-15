import React from 'react';
import PropTypes from "prop-types";
import './SearchBar.css';

function searchbar(props) {
  return (
    <form className="searchbar form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder={props.placeholder}
      ></input>
      <button className="btn btn-outline-success my-2 my-sm-0">
        {props.button}
      </button>
    </form>
  );
};

searchbar.PropTypes = {
  placeholder: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
};

searchbar.defaultProps = {
  placeholder: "Search",
  button: "Search"
};


export default searchbar;
