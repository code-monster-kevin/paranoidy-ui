import React from 'react';
import PropTypes from 'prop-types';
import './Jumbotron.css';

const jumbotron = props => {
  return (
    <div className="jumbotron JumbotronStyle">
      <h1 className="display-3">{props.title}</h1>
      <p className="lead">{props.subtitle}</p>
      <hr className="m-y-2" />
      <p>{props.description}</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href={props.link} role="button">
          {props.button}
        </a>
      </p>
    </div>
  );
};

jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
};

export default jumbotron;
