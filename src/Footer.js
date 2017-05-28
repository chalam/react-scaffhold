import React, {Component} from 'react';
import {
  Grid,
} from 'react-bootstrap';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Grid fluid>
        <hr/>
        <footer>
          <p>© Lamuel 2017</p>
        </footer>
      </Grid>
    );
  }
}

export default Footer;
