import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ''};
  }

  messageHandler(event) {
    if (event.target.value.length <= this.props.maxChars){
      return this.setState({[event.target.name]: event.target.value})
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.messageHandler.bind(this)} value={this.state.message}/>
        <p>{this.props.maxChars-this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
