import React, {Component} from 'react';

import SideBar from './SideBar'
import Page from './Page'

import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

// Layout
// SideBar|Page
class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <Grid fluid>
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
