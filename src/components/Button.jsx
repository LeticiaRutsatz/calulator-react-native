import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Dimensions, TouchableHighlight} from 'react-native';

function Button({onClick, label, double, operation, statistic}) {
  const style = [styles.button];

  if(double) style.push(styles.buttonDouble)
  if(operation) style.push(styles.operationButton)
  if(statistic) style.push(styles.statisticButton)

  return (
    <TouchableHighlight onPress={onClick}>
      <Text style={style}>{label}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 35,
    color: 'white',
    backgroundColor: '#313131',
    borderWidth: 1,
    textAlign: 'center',
    borderColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width:  Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
  },
  operationButton: {
    color: '#fffff',
    backgroundColor: '#e88f12'
  },
  statisticButton: {
    color: '#323232',
    backgroundColor: '#979797'
  },
  buttonDouble: {
    width:  Dimensions.get('window').width / 4 * 2,
  }
});

export default Button;

