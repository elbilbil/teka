import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Dimensions,
  TextInput,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Input from '../Controls/Input';

class HomeSurfaceInput extends Component {
  render() {
    const {textInputStyle} = this.props;
    return (
      <TextInput
        style={[styles.textInput, textInputStyle]}
        keyboardType={'numeric'}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: '89%',
    alignSelf: 'center',
    borderBottomColor: '#BDBFC8',
    borderBottomWidth: 1,
    color: '#313131',
    height: 40,
    fontSize: 17,
    lineHeight: 22,
  },
});

export default HomeSurfaceInput;
