import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CenteredTextBoxes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>
        TUGAS PRATIKUM ALDO
      </Text>
      
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  centeredText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  
  boxContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'green', 
  },
  
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'turquoise',
  },
});

export default CenteredTextBoxes;