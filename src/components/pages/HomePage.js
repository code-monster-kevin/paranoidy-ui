import React from 'react';
// import PaginationBar from '../common/NavBar/PaginationBar';
// import PaginationItem from '../common/NavBar/PaginationItem';
import HomeHeader from './HomeHeader';
import HomeContent from './HomeContent';
import HomeJumboSearch from './HomeJumboSearch';

function homepage() {
  return (
    <div>
      <HomeHeader />
      <div className="p-5"></div>
      <HomeJumboSearch />
      <HomeContent />
      {/*       <PaginationBar name="Page Links">
        <PaginationItem state="disabled" name="Previous" link="/" />
        <PaginationItem state="active" name="1" link="/" />
        <PaginationItem name="2" link="/" />
        <PaginationItem name="3" link="/" />
        <PaginationItem name="4" link="/" />
        <PaginationItem name="Next" link="/" />
      </PaginationBar> */}
    </div>
  );
}

export default homepage;
