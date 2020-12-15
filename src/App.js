import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Category from './components/Category.js'
import Task from './components/Task.js'
import Form from './components/Form.js'

class App extends React.Component {

  state = {
    tasks: [
      {text: 'Buy rice',
        category: 'Food'},
      { text: 'Save a tenner',
        category: 'Money'},
      { text: 'Build a todo app',
        category: 'Code'},
      {text: 'Build todo API',
        category: 'Code'},
      {text: 'Get an ISA',
        category: 'Money'},
      { text: 'Cook rice', category: 'Food'
      },
      { text: 'Tidy house',
        category: 'Misc'}
      ],
      selectedCategory: "All"
  }



  displayFilterButtons = () => {
   return CATEGORIES.map(c => {
      return <Category click={this.handleClick} text={c} selected={this.state.selectedCategory === c ? true : false}/>
    })
  }

  handleClick = (e) => {
    this.setState({selectedCategory: e.target.innerText})
  }

  renderTasks = () => {
    let filtered
    if(this.state.selectedCategory === "All"){
      filtered = this.state.tasks
    } else {
      filtered =  this.state.tasks.filter(task => {
      return task.category === this.state.selectedCategory
      })
    }
    return filtered.map(task => {
     return <Task task={task} delete={this.deleteTask}/>
    })
  }

  deleteTask = (text) => {
    let updated = (this.state.tasks.filter(task => task.text !== text))
    this.setState({tasks:  updated})
  }

  addTask = (text, category) => {
    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, {text:text, category:category}]
      }
    })
    
  }


  render() {
    return (
      <div className="App">

        <h2>My tasks</h2>
          
          <div className="categories">
            <h5>Category filters</h5>
            {this.displayFilterButtons()}
          </div>

          <div className="tasks">
            <h5>Tasks</h5>
            <Form categories={CATEGORIES} addTask={this.addTask}/>
              <div>
                {this.renderTasks()}
              </div>
          </div>


      </div>
    );
  }
}


export default App;
