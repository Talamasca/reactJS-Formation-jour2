import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageBar from "./MessageBar";
import { connect } from 'react-redux';

const chatStyle = {borderRadius: 10, fontFamily: 'Montserrat', width: 400, backgroundColor: '#A2DED0', padding: 10, display: 'flex', flexDirection: 'column'};

class Chat extends Component {
  constructor(props) {
    super(props);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.state = {messages: []};
  }

  handleMessageSubmit(message) {
    this.setState({messages: [...this.state.messages, {body: message, username: 'me'}]});
  }

  render() {
    return (
      <div style={chatStyle}>
        <div style={{paddingLeft: 10, paddingTop: 10, fontSize: 30}}>👅 Joli</div>
        <MessageList messages={this.state.messages} />
        <MessageBar handleMessageSubmit={this.handleMessageSubmit} />
      </div>
    )
  }
}

export default Chat;
