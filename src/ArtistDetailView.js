import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Actions } from "react-native-router-flux";

export default class ArtistDetailView extends Component<Props> {
  static navigationOptions = {
    headerTitle: () => (
      <Text style={styles.headerTop}>Detalles del Artista</Text>
    ),
    headerLeft: () => (
      <TouchableOpacity onPress={() => Actions.pop()}>
        <Text style={{ marginLeft: 20 }}>Volver</Text>
      </TouchableOpacity>
    ),
  };

  render() {
    const { artist } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: artist.image }} />
        <Text style={styles.artistName}>{artist.name}</Text>
        <Text style={styles.artistId}>{artist.id}</Text>
        <View style={styles.boxOtherInfo}>
          <Text style={styles.otherInfoText}>Listener:</Text>
          <Text style={styles.otherInfoText}>Streamable:</Text>
        </View>
        <View style={styles.boxOtherInfo}>
          <Text style={styles.otherInfoTextBold}>{artist.listener}</Text>
          <Text style={styles.otherInfoTextBold}>{artist.streamable}</Text>
        </View>
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
  image: {
    width: 300,
    height: 300,
    borderRadius: 300,
    marginTop: 20,
    marginBottom: 20,
  },
  artistName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  artistId: {
    fontSize: 15,
    fontFamily: "sans-serif-light",
    marginBottom: 10,
  },
  boxOtherInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
  },
  otherInfoText: {
    fontSize: 15,
  },
  otherInfoTextBold: {
    fontSize: 15,
    fontWeight: "bold",
  },
  headerTop: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
