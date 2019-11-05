import React, {Component} from 'react';
import ToDoItem from '../../components/ToDoItem/ToDoItem'
import NewTodoForm from '../../components/NewTodoForm/index'

class ToDoList extends Component {
static defaultProps = {
    tasks: [
        {text: 'Record a ReactJS video'},
        {done: true, text: 'Go for a walk'}
    ],
    title: 'My stuff'
}

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
      list.push({text: draft, done: false})
      this.setState({task: list, draft: ''})
    }
  
    render() {
      const { title } = this.props
      const { tasks, draft } = this.state
      return (
        <div>
          <h1>{title}</h1>
          {tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)}
          <NewTodoForm 
            onSubmit={this.addToDo}
            onChange={this.updateDraft}
            draft={draft}
          />
        </div>
      )
    }
  }

  export default ToDoList