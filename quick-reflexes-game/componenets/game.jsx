
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Game() {
  const handlePress = () => {
    alert('Game button pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>lo3ba </Text>
      <Button title="ENZEL LAHANA" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
