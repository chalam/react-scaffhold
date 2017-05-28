import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Col from 'react-bootstrap/lib/Col';

export default class InlineLogin extends React.Component {
  constructor() {
    super();

    this.onEmailChange = this.onEmailChange.bind(this);
    this.state = {};
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('Clicked');
  }

  onEmailChange(event) {
    const value = event.target.value;

    if (/.+@.+\.com/.test(value)) {
      this.setState({emailValid: 'success'});
    } else {
      this.setState({emailValid: 'error'});
    }
  }

  render() {
    return (
      <div>
        {/* <Form inline>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email"/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password"/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form> */}

        <form className={this.props.className} onSubmit={this.onSubmit} action="">
          <Form inline>
            <FormControl ref='email' type='text' bsStyle={this.state.emailValid} placeholder='Email' onChange={this.onEmailChange} hasFeedback/>{' '}
            <FormControl type='text' placeholder='Password'/>{' '}
            <Button bsStyle='success' type='submit'>Sign in</Button>
          </Form>
        </form>
      </div>
    );
  }
}
