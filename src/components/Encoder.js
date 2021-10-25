import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class Encoder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { encodeSwitch: true, output: "", error: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = "";
    let error = "";
    try {
      if (this.state.encodeSwitch) {
        value = btoa(event.target.value);
      } else {
        value = atob(event.target.value);
      }
    } catch(e) {
      error = e.message;
    }
    this.setState({ output: value, error: error });
  }

  render() {
    return (
      <div class="row mt-4">
        <div class="col-6">
          <div class="float-right mb-2">
            <Button className="ml-1" variant={this.state.encodeSwitch ? "primary" : "outline-primary"} onClick={() => this.setState({ encodeSwitch: true })}>Encode</Button>
            <Button className="ml-1" variant={!this.state.encodeSwitch ? "primary" : "outline-primary"} onClick={() => this.setState({ encodeSwitch: false })}>Decode</Button>
          </div>
          <Form.Control as="textarea" rows={3} onChange={this.handleChange} isInvalid={this.state.error !== ""}/>
          <Form.Control.Feedback type="invalid">
              {this.state.error}
          </Form.Control.Feedback>
        </div>
        <div class="col-6">
          <div class="float-right mb-2">
            <Button className="ml-1" variant="light" onClick={() => { navigator.clipboard.writeText(this.state.output) }}>Copy</Button>
          </div>
          <Form.Control as="textarea" rows={3} value={this.state.output} readOnly />
        </div>
      </div>
    );
  }
}
