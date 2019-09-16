import React from 'react';
import TopNavBar from '../common/NavBar/TopNavBar';
import Searchbar from '../common/NavBar/SearchBar';
import NavItem from '../common/NavBar/NavItem';
import DropdownItem from '../common/NavBar/DropdownItem';
import DropdownMenu from '../common/NavBar/DropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSignInAlt,
  faLanguage,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import skillsImage from '../../assets/logo/Skills126_45.png';

function homeheader() {
  return (
    <TopNavBar
      id="mainMenu"
      homelink="/"
      brand="Skills 126"
      theme="dark"
      logo={skillsImage}
    >
      <Searchbar placeholder="Search" button="Search" />
      <NavItem link="/">
        <FontAwesomeIcon icon={faHome} />
      </NavItem>
      <DropdownMenu id="quicklinks_dropdown" name="quick links" faicon={faBars}>
        <DropdownItem link="\">web development</DropdownItem>
        <DropdownItem link="\">mobile development</DropdownItem>
        <DropdownItem link="\">API development</DropdownItem>
        <DropdownItem link="\">database development</DropdownItem>
        <DropdownItem link="\">software design</DropdownItem>
        <DropdownItem link="\">programming languages</DropdownItem>
      </DropdownMenu>
      <NavItem link="/">
        <FontAwesomeIcon icon={faSignInAlt} /> Sign In
      </NavItem>
      <DropdownMenu id="dropdown-1" name="Language" faicon={faLanguage}>
        <DropdownItem link="\">english</DropdownItem>
        <DropdownItem link="\">bahasa melayu</DropdownItem>
        <DropdownItem link="\">中文</DropdownItem>
      </DropdownMenu>
    </TopNavBar>
  );
}

export default homeheader;
