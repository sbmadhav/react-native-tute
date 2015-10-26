'use babel';
import React from 'react-native';

const {
  Animated,
  Component,
  DeviceEventEmitter,
  PixelRatio,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

class AddNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      keyboardSpace: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.state.keyboardSpace.setValue(48);

    DeviceEventEmitter.addListener('keyboardWillShow', data => {
      if (data.endCoordinates) this.animate( data.endCoordinates.height + 48 );
    });

    DeviceEventEmitter.addListener('keyboardWillHide', data => {
      this.animate(48);
    });
  }

  animate(value) {
    Animated.timing(
      this.state.keyboardSpace,
      {
        toValue: value,
        duration: 250,
      }
    ).start();
  }

  add(e, task) {
    const { addNewTask } = this.props;

    addNewTask(task);

    // Clear input
    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;

    return (
      <View>
        <Animated.View style={[styles.newTodo, { height: this.state.keyboardSpace}]}>

          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={text}
            placeholder="Add New"
            onSubmitEditing={e => this.add(e, text)}
            returnKeyType="done"
           />

          <TouchableHighlight
            onPress={e => this.add(e, text)}
            underlayColor="orange"
          >
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Add</Text>
            </View>
          </TouchableHighlight>

        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newTodo: {
    // borderTopWidth: 1 / PixelRatio.get(),
    borderColor: 'black',
    flex: 1,
    // flexDirection: 'row'
  },
  addButton: {
    width: 72,
    height: 48,
    paddingVertical: 16,
    backgroundColor: '#FFF385',
  },
  addButtonText: {
    textAlign: 'center'
  },
  textInput: {
    paddingHorizontal: 16,
    flex: 1,
    height: 48
  }
});

module.exports = AddNew;
