import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import LearnMore from './LearnMore';
import Navbar from 'react-bootstrap/lib/Navbar';

import Clearfix from 'react-bootstrap/lib/Clearfix';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import InputGroupButton from 'react-bootstrap/lib/InputGroupButton';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 1.1
    }

    // This binding is necessary to make `this` work in the callback
    this.handleNavSelect = this.handleNavSelect.bind(this);
  }

  handleNavSelect(key) {
    alert('selected key ' + key);
    this.setState({activeKey: key});
  }

  // const PLACES = [
  //   { name: "Palo Alto", zip: "94303" },
  //   { name: "San Jose", zip: "94088" },
  //   { name: "Santa Cruz", zip: "95062" },
  //   { name: "Honolulu", zip: "96803" }
  // ];
  // <Nav
  //   bsStyle="pills"
  //   stacked
  //   activeKey={activePlace}
  //   onSelect={index => {
  //     this.setState({ activePlace: index });
  //   }}
  // >
  //   {PLACES.map((place, index) => (
  //     <NavItem key={index} eventKey={index}>{place.name}</NavItem>
  //   ))}
  // </Nav>

  render() {
    return (
      <div>
        <h3>Group one</h3>
        <Nav sideBar bsStyle="pills" stacked activeKey={1.1} onSelect={this.handleNavSelect}>
          <NavItem eventKey={1.1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={1.2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={1.3} disabled>NavItem 3 content</NavItem>
        </Nav>
        <h3>Group two</h3>
        <Nav sideBar bsStyle="pills" stacked activeKey={2.3} onSelect={this.handleNavSelect}>
          <NavItem eventKey={2.1} href="">Nav item</NavItem>
          <NavItem eventKey={2.2} href="">Nav item again</NavItem>
          <NavItem eventKey={2.3} href="">One more nav</NavItem>
          <NavItem eventKey={2.4} href="">Another nav item</NavItem>
          <NavItem eventKey={2.5} href="">Last Nav</NavItem>
        </Nav>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown" expanded>
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider/>
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
        <Clearfix>
          <ul className="dropdown-menu open">
            <MenuItem header>Header</MenuItem>
            <MenuItem>link</MenuItem>
            <MenuItem divider/>
            <MenuItem header>Header</MenuItem>
            <MenuItem>link</MenuItem>
            <MenuItem disabled>disabled</MenuItem>
            <MenuItem title="See? I have a title.">
              link with title
            </MenuItem>
            <MenuItem eventKey={1} href="#someHref" onSelect={this.handleNavSelect}>
              link that alerts
            </MenuItem>
          </ul>
        </Clearfix>
        <ListGroup>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>...</ListGroupItem>
        </ListGroup>
        {/* <ul class="nav nav-sidebar">
          <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Export</a></li>
        </ul>
        <ul class="nav nav-sidebar">
          <li><a href="">Nav item</a></li>
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
          <li><a href="">More navigation</a></li>
        </ul>
        <ul class="nav nav-sidebar">
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
        </ul> */}
      </div>
    );
  }
}

export default SideBar;
