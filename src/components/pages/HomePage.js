import React from 'react';
import Jumbotron from '../common/Jumbotron/Jumbotron';
import HomeHeader from './HomeHeader';

function HomePage() {
  return (
    <div>
      <HomeHeader />
      <Jumbotron
        title="This is Jumbotron"
        subtitle="An example Jumbotron component"
        description="This component uses bootstrap 4 to make a jumbotron component"
        link="#"
        button="Learn More"
      />
    </div>
  );
}

export default HomePage;
