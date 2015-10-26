'use babel';
import React, { Component, Navigator } from 'react-native';

class Nav extends Component {

  renderScene(route, navigator) {
    const Scene = route.component;

    return (
      <Scene route={route} navigator={navigator} />
    );
  }

  render() {
    return (
      <Navigator
        {...this.props}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) { return route.sceneConfig; }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
      />
    );
  }

};

module.exports = Nav;
