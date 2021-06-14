import React from 'react';

export default class Encoder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { encodeSwitch: true, source: "", output: "" };
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
      <div>
        <textarea onChange={this.handleChange} rows="5" col="23"></textarea>
        <button type="button">Encode</button>
        <button type="button">Decode</button>
        <textarea value={this.state.output} rows="5" col="23"></textarea>
      </div>
    );
  }
}
