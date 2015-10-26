'use babel';
import React, { Component, Navigator, StyleSheet , Main } from 'react-native';

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
        style={styles.container}
        tintColor='#FE2E64'
        initialRoute={{ title : 'TODO'  , component: Main}}
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

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

module.exports = Nav;
