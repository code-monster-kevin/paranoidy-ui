import React from 'react';
import TopNavBar from '../common/NavBar/TopNavBar';
import Searchbar from '../common/NavBar/SearchBar';
import NavItem from '../common/NavBar/NavItem';
import DropdownItem from '../common/NavBar/DropdownItem';
import DropdownMenu from '../common/NavBar/DropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faLanguage } from '@fortawesome/free-solid-svg-icons';

function homeheader() {
  return (
    <TopNavBar id="mainMenu" homelink="/" brand="Paranoidy" theme="dark">
      <Searchbar placeholder="Search" button="Search" />
      <DropdownMenu id="dropdown-1" name="Dropdown Menu 1">
        <DropdownItem link="\">Dropdown Item 1</DropdownItem>
        <DropdownItem link="\">Dropdown Item 1</DropdownItem>
        <DropdownItem link="\">Dropdown Item 1</DropdownItem>
      </DropdownMenu>
      <NavItem link="/">NavItem 1</NavItem>
      <NavItem link="/">NavItem 2</NavItem>
      <NavItem link="/">NavItem 3</NavItem>
      <NavItem link="/">
        <FontAwesomeIcon icon={faSignInAlt} />
      </NavItem>
      <NavItem link="/">
        <FontAwesomeIcon icon={faLanguage} />
      </NavItem>
    </TopNavBar>
  );
}

export default homeheader;
