import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HouseholdConfirmationScreen = () => {
  const [missingPeople, setMissingPeople] = useState('');

  const handleEnterPress = () => {
    if (!missingPeople || isNaN(missingPeople)) {
      Alert.alert('Invalid Input', 'Please enter a valid number of people.');
    } else {
      Alert.alert('Submitted', `Missing people: ${missingPeople}`);
    }
  };

  const navigation = useNavigation();

  const handleNextPress = () => {
    (navigation as any).navigate("comments");
    console.log('Next button pressed');
  };

  return (
    <View style={styles.container}>
       <Image source={require('@/assets/images/census-1.png')} style={styles.Image} />
      <Text style={styles.headerText}>Is there is anyone missing or left outfrom the listing, please add their total number</Text>

    

      <Text style={styles.labelText}>Please enter their total number:</Text>

      <TextInput
        style={styles.input}
        value={missingPeople}
        onChangeText={setMissingPeople}
        placeholder="Enter"
        keyboardType="numeric"
      />

<TouchableOpacity
            style={styles.buttonSecondary1}
            onPress={() => handleEnterPress()}
          >
            <Text style={styles.buttonText1}>Enter</Text>
      </TouchableOpacity>

      <Text style={styles.noteText}>If there is none, then click next to continue</Text>

      
      <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => handleNextPress()}
          >   
          <Text style={styles.buttonText1}>Next</Text>         
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
  },
  subHeaderText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFD740',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
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
  noteText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    height: 50,
    width: 100,
    left: 200,
    top: 100,
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
    
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
    marginBottom: 20, // Adjust space image and input
    alignSelf: "center",
  },
});

export default HouseholdConfirmationScreen;
