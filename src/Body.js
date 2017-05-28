import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SideBar from './SideBar'
import Page from './Page'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

// Layout
// SideBar|Page
class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <Grid fluid="true">
            <Row className="show-grid">
              <Col sm={3} md={2}>
                <SideBar></SideBar>
              </Col>
              <Col sm={9} md={10}>
                <Page></Page>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}

export default Body;
