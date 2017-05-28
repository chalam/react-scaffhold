import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Navbar from 'react-bootstrap/lib/Navbar';

export default class SearchBar extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ''
    };
  }

  handleClick(event) {
    alert('Submit Clicked...' + event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Search submitted: ' + this.state.value);
  }

  handleChange(event) {
    console.log('search', event.target.value);
    this.setState({value: event.target.value});
  }

  render() {
    return (
      // <form className={this.props.className} onSubmit={this.handleSubmit} action="">
      <Navbar.Form pullRight>
          <FormGroup>
            <FormControl ref='search' bsStyle={this.state.emailValid} type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..." />
          </FormGroup>{' '}
          <Button type="submit" onClick={this.handleClick} >Submit</Button>
      </Navbar.Form>
      // </form>
    );
  }
}
