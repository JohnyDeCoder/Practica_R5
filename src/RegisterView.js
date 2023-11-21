import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default class RegisterView extends Component {
  state = {
    email: "",
    userName: "",
    passInput1: "",
    passInput2: "",
  };

  static navigationOptions = {
    headerTitle: () => <Text style={styles.headerTop}>Registro</Text>,
    headerLeft: () => (
      <TouchableOpacity onPress={() => Actions.pop()}>
        <Text style={{ marginLeft: 20 }}>Volver</Text>
      </TouchableOpacity>
    ),
  };

  validateInput = () => {
    const { email, userName, passInput1, passInput2 } = this.state;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

    if (!email || !passInput1 || !passInput2 || !userName) {
      Alert.alert("Error", "Los campos no pueden estar vacíos.");
      return false;
    }

    if (!emailRegex.test(email)) {
      Alert.alert(
        "Error",
        "Por favor, introduce un correo electrónico válido."
      );
      return false;
    }

    if (!passwordRegex.test(passInput1) || !passwordRegex.test(passInput2)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener al menos 8 carácteres, mayúsculas y minúsculas y al menos 1 carácter especial."
      );
      return false;
    }

    if (passInput1 != passInput2 && passInput2 != passInput1) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return false;
    }

    return true;
  };

  handleSubmit = () => {
    if (this.validateInput()) {
      Alert.alert("Éxito", "Se ha registrado correctamente.");
      Actions.login();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          placeholder="lorem@ipsum.com"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Nombre de usuario</Text>
        <TextInput
          style={styles.input}
          onChangeText={(userName) => this.setState({ userName })}
          value={this.state.userName}
          placeholder="Lorem ipsum dolor sit amet"
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={(passInput1) => this.setState({ passInput1 })}
          value={this.state.passInput1}
          placeholder="Contraseña"
          secureTextEntry
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={(passInput2) => this.setState({ passInput2 })}
          value={this.state.passInput2}
          placeholder="Contraseña"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "crimson",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  label: {
    textAlign: "left",
    width: "80%",
    marginTop: 10,
  },
  headerTop: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
