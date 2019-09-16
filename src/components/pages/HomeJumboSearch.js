import React from 'react';
import Jumbotron from '../common/Jumbotron/Jumbotron';
import SearchBar from '../common/NavBar/SearchBar';

function homejumbosearch(props) {
  return (
    <div className="container">
      <Jumbotron
        title="skills 126"
        subtitle="skills mastery and life long learning in information technology"
      >
        <SearchBar placeholder="find a skill" button="start learning" />
      </Jumbotron>
    </div>
  );
}

export default homejumbosearch;
