import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

export default function HomeScreen() {
  const navigation = useNavigation();

  // State for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check for hardcoded username and password
    if (username.trim() === "Big Dawg" && password === "1234567") {
      navigation.navigate("indicative"); // Navigate to indicative page
    } else {
      // Handle error (e.g., show an alert)
      alert("Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
       <Image source={require('@/assets/images/census-1.png')} style={styles.Image} />

             
      <Text style={styles.headerText}>Kindly enter your log in details</Text>
      
      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#000000" // Placeholder color
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000000" // Placeholder color
        secureTextEntry={true} // Hides the password text
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
            style={styles.buttonSecondary1}
            onPress={() => handleLogin()}
          >
            <Text style={styles.buttonText1}>Login</Text>
      </TouchableOpacity>
    

      
    </View>
  );
}

// Styling for a modern, attractive layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#e6e600", // Dark background for contrast against buttons
  },
  logo: {
    width: 410,
    height:80,
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 50,
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000", // Changed to white for contrast against dark background
    textAlign: "center",
    marginBottom: 10, // Adjust space between text and input fields
   
  },
  subText: {
    fontSize: 16,
    color: "#000000", // Light gray for better contrast
    textAlign: "center",
    marginBottom: 20, // Adjust space between text and input fields
  },
  input: {
    height: 50,
    width: '80%', // Width of the input fields
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20, // Space between input fields and buttons
    color: "#000000", // Text color
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
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  imagename: {
    fontSize: 25,
    color: "#ddd", // Light gray for better contrast
    textAlign: "left",
    marginBottom: 20, 
    marginTop: 20, // Add some space between the logo and the text
  },
  Image:{
    width:300,
    height:200,
    marginBottom: 20, // Adjust space between image and input
  },
 
});