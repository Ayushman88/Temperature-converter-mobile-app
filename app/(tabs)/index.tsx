import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

export default function App() {
  const [inputTemp, setInputTemp] = useState("");
  const [unit, setUnit] = useState("Celsius");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    const temp = parseFloat(inputTemp);
    if (isNaN(temp)) {
      Alert.alert("Invalid input", "Please enter a valid number");
      return;
    }

    let convertedTemp;
    let newUnit;

    if (unit === "Celsius") {
      convertedTemp = (temp * 9) / 5 + 32;
      newUnit = "Fahrenheit";
    } else {
      convertedTemp = ((temp - 32) * 5) / 9;
      newUnit = "Celsius";
    }

    setResult(`${convertedTemp.toFixed(2)} °${newUnit}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Temperature Converter</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter temperature"
        keyboardType="numeric"
        value={inputTemp}
        onChangeText={setInputTemp}
      />

      <Picker
        selectedValue={unit}
        onValueChange={(itemValue) => setUnit(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Celsius" value="Celsius" />
        <Picker.Item label="Fahrenheit" value="Fahrenheit" />
      </Picker>

      <Button title="Convert" onPress={handleConvert} />

      {result ? <Text style={styles.result}>Result: {result}</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  picker: {
    height: 80,
    marginBottom: 20,
  },
  result: {
    fontSize: 24,
    marginTop: 30,
    textAlign: "center",
    color: "#333",
  },
});
