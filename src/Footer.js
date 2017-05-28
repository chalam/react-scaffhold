import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
// import InlineLogin from './InlineLogin';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Grid fluid="true">
        <hr/>
        <footer>
          <p>© Lamuel 2017</p>
        </footer>
      </Grid>
    );
  }
}

export default Footer;
