/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use babel';

import React from 'react-native';
import Nav from './App/Nav';
import Main from './App/Main';

const {
  AppRegistry,
  Component,
  StyleSheet,
  View,
} = React;

class TODOApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav
          initialRoute={{
            component: Main
          }}
        />
      </View>
    );
  }
}
// color : #333
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },
});

AppRegistry.registerComponent('TODOApp', () => TODOApp);