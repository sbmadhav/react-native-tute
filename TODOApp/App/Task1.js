'use babel';
import React from 'react-native';
import Task from './Task';
import AddNew from './AddNew';
import API from './api';

const {
  Component,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    }
  }

  componentDidMount() {
    // Fetch tasks using fake ajax call...
    API.getTasksFake(data => {
      this.setState({ tasks: data.tasks });
    });
  }

  addNewTask(text) {
    let { tasks } = this.state;

    // Simple validation
    const textTrimmed = text.trim()
    if (textTrimmed.length < 1) { return; }

    const newTask = {
        task: textTrimmed,
        done: false,
    };

    // Add new task to list
    this.setState({ tasks: tasks.concat(newTask) });
  }

  // Toggle task's done status
  toggle(index) {
    let { tasks } = this.state;
    tasks[index].done = !tasks[index].done;

    this.setState({ tasks });
  }

  render() {
    const { tasks } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>

          <View style={styles.taskList}>
            {tasks.map((item, index) =>
              <Task
                key={index}
                task={item.task}
                done={item.done}
                index={index}
                toggle={this.toggle.bind(this)}
              />
            )}
          </View>
        </ScrollView>
        <SliderIOS
          style={styles.slider}
          onValueChange={(value) => this.setState({value: value})} />
        <AddNew addNewTask={this.addNewTask.bind(this)} />
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: { flex: 1 },
  taskList: { flex: 1 }
});

module.exports = Main;