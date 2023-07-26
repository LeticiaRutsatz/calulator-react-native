import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Dimensions, TouchableHighlight} from 'react-native';

function Display({value}) {

  return (
<View style={style.display}>
    <Text style={style.displayLetter}>
        {value}
    </Text>
</View>  )
}

const style = StyleSheet.create({
  display: {
    flex: 1,
    padding: 2,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  displayLetter:{
    fontSize: 60,
    color: '#ffffff',
  }
});

export default Display;

