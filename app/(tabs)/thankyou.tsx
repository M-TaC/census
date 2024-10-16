import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ThankYouScreen = () => {
  function handleEnterPress(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>

      <Image source={require('@/assets/images/census-1.png')} style={styles.Image} />
      
      <Text style={styles.thankYouText}>"Thank you for your participation!"</Text>
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
    backgroundColor: '#e6e600', // Teal background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    // Style for logo container
  },
  thankYouText: {
    fontSize: 22,
    marginVertical: 8,
    color: '#000000', // Assuming white color for text
    fontWeight:'bold',
    marginBottom: 30,
  },
  localThankYouText: {
    fontSize: 20,
    marginBottom: 30,
    color: '#FFFFFF', // Assuming white color for text
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

export default ThankYouScreen;
