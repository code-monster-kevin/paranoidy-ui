import React from 'react';
import PropTypes from 'prop-types';
import './SimpleCard.css';

function simplecard(props) {
  return (
    <div className="card shadow">
      <img className="card-img-top" src={props.image} alt={props.imgAlt} />
      <div className="card-body text-capitalize">
        <h4 className="card-title">{props.title}</h4>
        <h6 className="card-subtitle">{props.subtitle}</h6>
        <p>
          <small>{props.description}</small>
        </p>
        <div className="card-footer">
          <a href={props.link} className="btn btn-info">
            {props.button}
          </a>
        </div>
      </div>
    </div>
  );
}

simplecard.propTypes = {
  image: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
};

export default simplecard;
