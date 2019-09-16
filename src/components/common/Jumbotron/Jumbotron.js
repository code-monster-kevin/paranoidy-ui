import React from 'react';
import PropTypes from 'prop-types';
import JumbotronImage from '../../../assets/img/jumbotron_image1.jpg';
import './Jumbotron.css';

function jumbotron(props) {
  return (
    <div
      className="jumbotron"
      style={{
        backgroundImage: `url(${JumbotronImage})`
      }}
    >
      <h1 className="display-3 text-capitalize">{props.title}</h1>
      <p className="lead text-capitalize">{props.subtitle}</p>
      <hr className="m-y-2" />
      {props.children}
    </div>
  );
}

jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default jumbotron;
