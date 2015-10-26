'use babel';
export default API = {

  getTasksFake(callback, delay = 250) {
    setTimeout(() => {
      const tasks = {
        tasks: [
          { task: 'Learn React', done: false },
          { task: 'Check out ES2015', done: false },
          { task: 'Party all day', done: true },
        ]
      };

      callback(tasks);
    }, delay);
  },

  getTasks(callback) {
    return fetch('http://localhost:3000/api/tasks')
           .then(res => res.json())
           .then(data => callback(data));
  }

};
