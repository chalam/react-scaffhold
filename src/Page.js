import React, {Component} from 'react';


import LearnMore from './LearnMore';

import {
  Button,
  Grid,
  Row,
  Col,
  Jumbotron,
  PageHeader,
  Panel,
  PanelGroup,
  Tab,
  Tabs,
  Table,
  Image
} from 'react-bootstrap';

// Layout
// Page Header
// Row
// Sub Header
// Grid
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 4,
      activePanelKey: 'p1'
    }
    // This binding is necessary to make `this` work in the callback
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.handlePanelSelect = this.handlePanelSelect.bind(this);
  }

  handleTabSelect(key) {
    alert('selected key ' + key);
    this.setState({
      activeTabKey: key});
  }

  handlePanelSelect(key) {
    alert('selected key ' + key);
    this.setState({
      activePanelKey: key});
  }

  render() {
    return (
      <div>
        <PageHeader>Page header <small>Subtext for header</small></PageHeader>

        <Grid fluid>
          <Row bsClass="show-grid">
            <Col sm={3}>
              <Image src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" rounded/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </Col>
            <Col sm={3}>
              <Image src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" circle/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </Col>
            <Col sm={3}>
              <Image src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" thumbnail/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </Col>
            <Col sm={3}>
              <Image src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" circle/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </Col>
          </Row>
        </Grid>

        <h2>Sub title</h2>
        <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabSelect} id="controlled-tab-example">
          <Tab eventKey={1} title="Tab 1">
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey={2} title="Tab 2">
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey={3} title="Disabled Tab 3" disabled>disabled Tab 3 content</Tab>
          <Tab eventKey={4} title="Panel Tab 4">
            <PanelGroup activeKey={this.state.activeKey} onSelect={this.handlePanelSelect} accordion>
             <Panel header="Panel 1" eventKey="p1">
             <Table responsive striped bordered condensed hover>
               <thead>
                 <tr>
                   <th>#</th>
                   <th>Table heading</th>
                   <th>Table heading</th>
                   <th>Table heading</th>
                   <th>Table heading</th>
                   <th>Table heading</th>
                   <th>Table heading</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>5</td>
                   <td>Table cell</td>
                   <td>Table cell</td>
                   <td>Table cell</td>
                   <td>Table cell</td>
                   <td>Table cell</td>
                   <td>Table cell</td>
                 </tr>
                 <tr>
                   <td>6</td>
                   <td>Table cell</td>
                   <td>Table cell</td>
                   <td>Table cell</td>
                   <td>Table cell</td>
                   <td>Table cell</td>
                   <td>Table cell</td>
                 </tr>
               </tbody>
             </Table>
             </Panel>
             <Panel header="Panel 2" eventKey="p2">Panel 2 content</Panel>
           </PanelGroup>
          </Tab>
        </Tabs>

      </div>
    );
  }
}

export default Page;
