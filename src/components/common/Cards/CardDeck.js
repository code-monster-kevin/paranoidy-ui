import React from 'react';

function carddeck(props) {
  return <div className="card-deck mt-2 mb-2">{props.children}</div>;
}

export default carddeck;
