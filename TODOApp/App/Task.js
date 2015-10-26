'use babel';
import React from 'react-native';

const {
  Component,
  SliderIOS,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

class Task extends Component {
  render() {
    const { task, done, toggle, index } = this.props;
    const circleStyle = done ? styles.circleDone : null;

    return (
      <View>
        <TouchableOpacity style={styles.container} onPress={e => toggle(index)}>
          <View style={styles.button}>
            <View style={[styles.circle, circleStyle]} />
            <Text>{task}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
    // flexDirection: 'row'
  },
  circle: {
    width: 16,
    height: 16,
    marginRight: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'orange'
  },
  circleDone: {
    borderColor: '#91ee91',
    backgroundColor: '#91ee91'
  }
});

module.exports = Task;
