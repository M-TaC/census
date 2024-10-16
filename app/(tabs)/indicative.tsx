import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IndicativeInfoScreen = () => {
  const [formData, setFormData] = useState({
    province: '',
    district: '',
    llg: '',
    ward: '',
    censusUnit: '',
    censusUnitType: '',
    workloadNo: '',
    locality: '',
    section: '',
    structureRecord: '',
    householdNo: '',
    pdNo: '',

  });
  

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const navigation = useNavigation();

  const handleNextPress = () => {
    (navigation as any).navigate("household confirmation");
    console.log(formData);
  };
  

  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('@/assets/images/census-1.png')} style={styles.Image} />
      
      <Text style={styles.headerText}>Indicative Information</Text>

      {/* Province */}
      <TextInput
        style={styles.input}
        value={formData.province}
        onChangeText={(value) => handleInputChange('province', value)}
        placeholder="Province"
      />

      {/* District */}
      <TextInput
        style={styles.input}
        value={formData.district}
        onChangeText={(value) => handleInputChange('district', value)}
        placeholder="District"
      />

      {/* LLG */}
      <TextInput
        style={styles.input}
        value={formData.llg}
        onChangeText={(value) => handleInputChange('llg', value)}
        placeholder="LLG"
      />

      {/* Ward */}
      <TextInput
        style={styles.input}
        value={formData.ward}
        onChangeText={(value) => handleInputChange('ward', value)}
        placeholder="Ward"
      />

      {/* Census Unit */}
      <TextInput
        style={styles.input}
        value={formData.censusUnit}
        onChangeText={(value) => handleInputChange('censusUnit', value)}
        placeholder="Census Unit"
      />

      {/* Census Unit Type */}
      <TextInput
        style={styles.input}
        value={formData.censusUnitType}
        onChangeText={(value) => handleInputChange('censusUnitType', value)}
        placeholder="Census Unit Type"
      />

      {/* Workload No */}
      <TextInput
        style={styles.input}
        value={formData.workloadNo}
        onChangeText={(value) => handleInputChange('workloadNo', value)}
        placeholder="Workload No"
      />

      {/* Locality */}
      <TextInput
        style={styles.input}
        value={formData.locality}
        onChangeText={(value) => handleInputChange('locality', value)}
        placeholder="Locality"
      />

      {/* Section */}
      <TextInput
        style={styles.input}
        value={formData.section}
        onChangeText={(value) => handleInputChange('section', value)}
        placeholder="Section"
      />

      {/* Structure Record */}
      <TextInput
        style={styles.input}
        value={formData.structureRecord}
        onChangeText={(value) => handleInputChange('structure record', value)}
        placeholder="structure record"
      />

      {/* Household No */}
      <TextInput
        style={styles.input}
        value={formData.householdNo}
        onChangeText={(value) => handleInputChange('householdNo', value)}
        placeholder="Household No"
      />

      
      {/* PD No */}
      <TextInput
        style={styles.input}
        value={formData.ward}
        onChangeText={(value) => handleInputChange('PD No', value)}
        placeholder="PD No"
      />

<TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => handleNextPress()}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e6e600',
    padding: 20,
    justifyContent: 'center',
    
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#B2DFDB',
    backgroundColor: '#E0F7FA',
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonSecondary: {
    backgroundColor: "#ffcc00", // Stylish blue for Sign In/Sign Up buttons
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
  },
  Image:{
    width:300,
    height:200,
    marginBottom: 20, // Adjust space image and input
    alignSelf: "center",
  },
});

export default IndicativeInfoScreen;


