import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  View,
  
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AuthComponent from "@/components/auth/AuthComponent";
import React from "react";

export default function HomeScreen() {
  const navigation = useNavigation();
 
  const handleSignIn = () => {
    (navigation as any).navigate("authentication");
  };

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/census-1.png')} style={styles.Image} />

      <Image source={require('@/assets/images/census-2.png')} style={styles.Image} />


    
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => handleSignIn()}
      >
        <Text style={styles.buttonText}>Lets Get Started</Text>
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
    backgroundColor: "#e6e600", // Light background for contrast against buttons
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
    
  },

  censusInfo: {
    color: '#ffcc00',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    fontWeight:"condensed"
  },
  subText: {
    fontSize: 16,
    color: "#b30000",
    textAlign: "center",
    marginBottom: 40, // Space between text and buttons
    fontWeight:"condensed",
    
  },
  button: {
    backgroundColor: "#ffcc00", // Modern green color
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
  },
  Image:{
    width:300,
    height:200,
    marginBottom: 20, // Adjust space between text and button
    
  }
  
});
