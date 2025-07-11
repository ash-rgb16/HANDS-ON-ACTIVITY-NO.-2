import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create new account</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail Address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View style={styles.contButton}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    paddingBottom: 20,
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  backButton: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#ff4242',
  },
  content: {
    width: '80%',
  },
  contButton: {
    width: '70%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff4665',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    padding: 10,
    borderRadius: 20,
  },
  button: {
    marginTop: 20,
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#ff4665',
    padding: 10,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default App;
