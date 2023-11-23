import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { Actions } from "react-native-router-flux";

import ArtistList from "./ArtistList";
import { getMusicData } from "./api-client";

export default class HomeView extends Component<Props> {
  static navigationOptions = {
    headerTitle: () => <Text style={styles.headerTop}>Artistas</Text>,
    headerLeft: () => (
      <TouchableOpacity onPress={() => Actions.login()}>
        <Text style={{ marginLeft: 20 }}>Salir</Text>
      </TouchableOpacity>
    ),
  };

  state = {
    artists: null,
    loading: true,
  };

  componentDidMount() {
    getMusicData().then((data) =>
      this.setState({ artists: data, loading: false })
    );
  }

  render() {
    const { artists, loading } = this.state;

    return (
      <View style={styles.container}>
        {loading ? (
          <View style={styles.loadingCenter}>
            <ActivityIndicator size="large" color="crimson" />
            <Text>Cargando artistas...</Text>
          </View>
        ) : (
          artists && <ArtistList artists={artists} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 5,
  },
  loadingCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTop: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
