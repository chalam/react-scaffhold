import React, {Component} from 'react';

import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

import InlineLogin from './InlineLogin';
import SearchBar from './SearchBar';

class HeaderNavigation extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }

  render() {
    let brand = <a href='#'>Lamuel's React-Bootstrap</a>;
    return (
      <Navbar inverse collapseOnSelect fluid>
        <Navbar.Header>
          <Navbar.Brand>
            {brand}
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
            <NavItem eventKey={1} href="#">Link 1</NavItem>
            <NavItem eventKey={2} href="#">Link 2</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight onSelect={this.handleSelect}>
            <NavItem eventKey={4} href="#">Settings</NavItem>
            <NavItem eventKey={5} href="#">Profile</NavItem>
          </Nav>
          <Nav pullRight onSelect={this.handleSelect}>
            <SearchBar className='navbar-form'/>
          </Nav>
          <Nav pullRight>
            <InlineLogin className='navbar-form'/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderNavigation;
