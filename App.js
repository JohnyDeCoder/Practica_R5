import React, { Component } from "react";
import { Actions, Router, Scene } from "react-native-router-flux";
import LoginView from "./src/LoginView";
import RegisterView from "./src/RegisterView";
import HomeView from "./src/HomeView";
import ArtistDetailView from "./src/ArtistDetailView";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} initial={true} hideNavBar />
    <Scene key="register" component={RegisterView} />
    <Scene key="home" component={HomeView} hideNavBar />
    <Scene key="artistDetail" component={ArtistDetailView} />
  </Scene>
);

export default class App extends Component<Props> {
  render() {
    return <Router scenes={scenes} />;
  }
}
