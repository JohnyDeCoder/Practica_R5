import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

import ArtistList from "./ArtistList";
import { getMusicData } from "./api-client";

export default class HomeView extends Component<Props> {
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
    paddingTop: 50,
  },
  loadingCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
