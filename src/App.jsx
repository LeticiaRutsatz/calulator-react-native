import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState(null);
  const [current, setCurrent] = useState(0);
  const [operation, setOperation] = useState('');

  function addDigit(number) {
    if (number === '.' && display.includes('.')) {
      return;
    }

    setDisplay(display === '0' ? number : display + number);
  }

  function clearMemory() {
    setDisplay('0');
    setMemory(null);
    setCurrent(0);
    setOperation('');
  }

function performOperation(nextOperation) {
  const result = nextOperation === '=' ? evaluateExpression(current, parseFloat(display), operation) : parseFloat(display);

  if (nextOperation === '=' && operation) {
    setDisplay(result.toString());
    setMemory(result);
    setCurrent(0);
    setOperation('');
  } else {
    setCurrent(result);
    setMemory(nextOperation === '=' && memory !== null ? result : parseFloat(display));
    setDisplay('0');
    setOperation(nextOperation);
  }
}


  function evaluateExpression(leftOperand, rightOperand, operator) {
    switch (operator) {
      case '+':
        return leftOperand + rightOperand;
      case '-':
        return leftOperand - rightOperand;
      case 'x':
        return leftOperand * rightOperand;
      case '/':
        return leftOperand / rightOperand;
      default:
        return rightOperand;
    }
  }

  return (
    <View style={styles.app}>
      <Display value={display} />

      <View style={styles.buttons}>
        <Button label='AC' onClick={clearMemory} />
        <Button label='+/-' onClick={() => addDigit('-/+')} />
        <Button label='%' onClick={() => addDigit('%')} />
        <Button label='/' operation onClick={() => performOperation('/')} />
        <Button label='7' onClick={() => addDigit('7')} />
        <Button label='8' onClick={() => addDigit('8')} />
        <Button label='9' onClick={() => addDigit('9')} />
        <Button label='x' operation onClick={() => performOperation('x')} />
        <Button label='4' onClick={() => addDigit('4')} />
        <Button label='5' onClick={() => addDigit('5')} />
        <Button label='6' onClick={() => addDigit('6')} />
        <Button label='-' operation onClick={() => performOperation('-')} />
        <Button label='1' onClick={() => addDigit('1')} />
        <Button label='2' onClick={() => addDigit('2')} />
        <Button label='3' onClick={() => addDigit('3')} />
        <Button label='+' operation onClick={() => performOperation('+')} />
        <Button label='0' double onClick={() => addDigit('0')} />
        <Button label='.' onClick={() => addDigit('.')} />
        <Button label='=' operation onClick={() => performOperation('=')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#000000',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
