import React from 'react';
import Jumbotron from '../common/Jumbotron/Jumbotron';
import Breadcrumb from '../common/NavBar/Breadcrumb';
import PaginationBar from '../common/NavBar/PaginationBar';
import PaginationItem from '../common/NavBar/PaginationItem';
import HomeHeader from './HomeHeader';
import HomeContent from './HomeContent';

function homepage() {
  return (
    <div>
      <HomeHeader />
      <Breadcrumb />
      <Jumbotron
        title="This is Jumbotron"
        subtitle="An example Jumbotron component"
        description="This component uses bootstrap 4 to make a jumbotron component"
        link="#"
        button="Learn More"
      />
      <HomeContent />
      <PaginationBar name="Page Links">
        <PaginationItem state="disabled" name="Previous" link="/" />
        <PaginationItem state="active" name="1" link="/" />
        <PaginationItem name="2" link="/" />
        <PaginationItem name="3" link="/" />
        <PaginationItem name="4" link="/" />
        <PaginationItem name="Next" link="/" />
      </PaginationBar>
    </div>
  );
}

export default homepage;
