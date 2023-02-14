import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Complete = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Complete!</Text>
      <Button
        title="Back to Menu"
        onPress={() => navigation.navigate('Menu')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Chalkboard SE',
    textAlign: 'center',
  },
  button: {
    marginVertical: 10,
  },
});

export default Complete;
