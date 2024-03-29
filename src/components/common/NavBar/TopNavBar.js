import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './TopNavBar.css';

function topnavbar(props) {
  return (
    <nav
      className={`topnavbar navbar navbar-expand-lg fixed-top navbar-${props.theme} bg-${props.theme}`}
      id={props.id}
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href={props.homelink}>
          <img src={props.logo} alt={props.brand} /> {props.brand}
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target={`#${props.id}Responsive`}
          aria-controls={`${props.id}Responsive`}
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id={`${props.id}Responsive`}>
          <ul className="navbar-nav text-uppercase ml-auto">
            {props.children}
          </ul>
        </div>
      </div>
    </nav>
  );
}

topnavbar.propTypes = {
  id: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  homelink: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
};

topnavbar.defaultProps = {
  theme: 'dark'
};

export default topnavbar;
