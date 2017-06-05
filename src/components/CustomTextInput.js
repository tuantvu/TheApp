import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native';

export class CustomTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

export class CustomTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Custom Multiline Placeholder',
    };
  }
}
