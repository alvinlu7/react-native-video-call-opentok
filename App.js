import React, { Component } from 'react';
import { View } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.apiKey = '46175062';
    this.sessionId = '2_MX40NjE3NTA2Mn5-MTUzNDk3MDE4ODg5NH5JanVMSmVVSjZOd3gvajBrVlY2Tm11STd-UH4';
    this.token = 'T1==cGFydG5lcl9pZD00NjE3NTA2MiZzaWc9N2NiZjdmYzUxOGRjM2U2YmI3MTExOTY3NmViYjBmYmU5OTMzNGVkMTpzZXNzaW9uX2lkPTJfTVg0ME5qRTNOVEEyTW41LU1UVXpORGszTURFNE9EZzVOSDVKYW5WTVNtVlZTalpPZDNndmFqQnJWbFkyVG0xMVNUZC1VSDQmY3JlYXRlX3RpbWU9MTUzNDk3MDIxMiZub25jZT0wLjI3MjY0NzA5OTA0MjQxNjgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUzNTU3NTAxMiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={this.token}>
          <OTPublisher style={{ width: 100, height: 100 }} />
          <OTSubscriber style={{ width: 100, height: 100 }} />
        </OTSession>
      </View>
    );
  }
}