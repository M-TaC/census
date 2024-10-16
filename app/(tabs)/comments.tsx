import React from 'react';
import { View, Text, TextInput, Image, StyleSheet,TouchableOpacity } from 'react-native';

const CensusScreen = () => {
  function handleSavePress(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>

     <Image source={require('@/assets/images/census-1.png')} style={styles.Image} />

      <Text style={styles.title}>Comments</Text>
      <Text style={styles.subtitle}>Comment/Remarks (Note in the space below any comments/questions if you have). </Text>
      <TextInput 
        style={styles.input} 
        placeholder="Add text here....."
        // Add other TextInput properties like onChangeText here
      />
      <TouchableOpacity
            style={styles.buttonSecondary1}
            onPress={() => handleSavePress()}
          >
            <Text style={styles.buttonText1}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e600', // Assuming this is the background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    // Style for header where logos will be placed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Assuming white color for text
    marginVertical: 10,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#000000', // Assuming white color for text
    marginBottom: 20,
    fontWeight:'bold'
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#FFFFFF', // White background for input field
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginBottom: 30,
  },
  buttonSecondary1: {
    backgroundColor: "#a6a6a6", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    height: 50,
    width: 120,
    
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
  },
});

export default CensusScreen;
