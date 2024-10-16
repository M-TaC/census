import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const HouseholdScreen = () => {
  const [householdSize, setHouseholdSize] = useState('');

  const handleEnterPress = () => {
    const size = parseInt(householdSize, 10);
    if (!householdSize || isNaN(size)) {
      Alert.alert('Invalid Input', 'Please enter a valid number of people.');
    } else {
      Alert.alert('Submitted', `Number of people: ${size}`);
    }
  };

  return (
    <View style={styles.container}>

      <Image source={require('@/assets/images/census-1.png')} style={styles.Image} />

      <Text style={styles.headerText}>Registry</Text>

      <Text style={styles.labelText}>:A. How many people (including visitors), slept here in your household on the night of Friday, 23rd 2024? </Text>

      <TextInput
        style={styles.input}
        value={householdSize}
        onChangeText={setHouseholdSize}
        placeholder="Enter"
        keyboardType="numeric"
      />

<TouchableOpacity
            style={styles.buttonSecondary1}
            onPress={() => handleEnterPress()}
          >
            <Text style={styles.buttonText1}>Enter</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e600',
    padding: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 40,
  },
  labelText: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight:'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#B2DFDB',
    backgroundColor: '#E0F7FA',
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonSecondary1: {
    backgroundColor: "#a6a6a6", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    height: 50,
    width: 120,
    left: 130,
  },
  buttonText1: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
  },
  Image:{
    width:300,
    height:200,
    marginBottom: 20, // Adjust space between image and input
  },
});

export default HouseholdScreen;
