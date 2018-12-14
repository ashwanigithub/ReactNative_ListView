import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const {
    buttonStyle,
     textStyle
   } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    margineRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 10,
    paddingTop: 10
  }
};

export { Button };
