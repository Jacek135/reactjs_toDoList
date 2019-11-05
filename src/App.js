import React, {Component} from 'react';
import './App.css'
import ToDoList from './containers/ToDoList/index'

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList title='My stuff' tasks={this.myTasks}/>
      </div>
    )
  }
}

export default App;
