import React, {Component} from 'react';

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft = event => {
    this.setState({draft: event.target.value})
  }

  addToDo = () => {
    const {tasks, draft} = this.state
    const list = tasks
    list.push(draft)
    this.setState({task: list, draft: ''})
  }

  render() {
    const { title } = this.props
    const { tasks, draft } = this.state
    return (
      <div>
        <h1>{title}</h1>
        {tasks.map(task => <dvi><p>{task}</p></dvi>)}
        <input type='text' onChange={this.updateDraft} value={draft}/>
        <button onClick={this.addToDo}>Add</button>
      </div>
    )
  }
}


class App extends Component {
  myTasks = [
    'Reacord a ReactJS video',
    'Go for a walk'
  ]
  render() {
    return (
      <div>
        <ToDoList title='My stuff' tasks={this.myTasks}/>
      </div>
    )
  }
}

export default App;
