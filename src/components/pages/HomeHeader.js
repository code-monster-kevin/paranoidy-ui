import React from 'react';
import TopNavBar from '../common/NavBar/TopNavBar';
import Searchbar from '../common/NavBar/SearchBar';
import NavItem from '../common/NavBar/NavItem';
import DropdownItem from '../common/NavBar/DropdownItem';
import DropdownMenu from '../common/NavBar/DropdownMenu';

function homeheader() {
  return (
    <TopNavBar id="mainMenu" homelink="/" brand="Paranoidy" theme="dark">
      <Searchbar placeholder="Search" button="Search" />
            <DropdownMenu id="dropdown-1" name="Dropdown Menu 1">
              <DropdownItem link="\" name="Dropdown Item 1" />
              <DropdownItem link="\" name="Dropdown Item 2" />
              <DropdownItem link="\" name="Dropdown Item 3" />
            </DropdownMenu>
            <NavItem name="NavItem 1" link="/" />
            <NavItem name="NavItem 2" link="/" />
            <NavItem name="NavItem 3" link="/" />
            <NavItem name="NavItem 4" link="/" />
    </TopNavBar>
  );
};

export default homeheader;
