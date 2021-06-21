import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class Encoder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { encodeSwitch: true, output: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if(this.state.encodeSwitch) {
      this.setState({output: btoa(event.target.value)});
    } else {
      this.setState({output: atob(event.target.value)});
    }
  }

  render() {
    return (
      <div class="row">
        <div class="col-6">
          <div class="float-right">
            <Button variant={this.state.encodeSwitch ? "primary" : "outline-primary"} onClick={() => this.setState({encodeSwitch: true})}>Encode</Button>
            <Button variant={!this.state.encodeSwitch ? "primary" : "outline-primary"} onClick={() => this.setState({encodeSwitch: false})}>Decode</Button>
          </div>
          <Form.Control as="textarea" rows={3} onChange={this.handleChange}/>
        </div>
        <div class="col-6">
          <Form.Control as="textarea" rows={3} value={this.state.output}/>
        </div>
      </div>
    );
  }
}
