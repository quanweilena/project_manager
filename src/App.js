import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import $ from 'jquery';
import uuid from 'uuid';
import Projects from './components/Projects';
import Header from './components/Header';
import AddProject from './components/AddProject';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  // Get json placeholder using jquery
  getTodos() {
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, function() {});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  getProjects() {
    this.setState(
      {
        projects: [
          {
            id:uuid.v4(),
            title: 'Business website',
            category: 'Web design'
          },
          {
            id:uuid.v4(),
            title: 'Social app',
            category: 'Mobile development'
          },
          {
            id:uuid.v4(),
            title: 'Ecommerce shopping cart',
            category: 'Web development'
          }
        ]
      }
    )
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  handleAddProject(newProject) {
    // console.log(newProject);
    let arr = this.state.projects;
    arr.push(newProject);
    this.setState(
      {
        projects: arr
      }
    )
  }

  handleDeleteProject(id){
    // console.log(id);
    let arr = this.state.projects;
    let indexOfProject = arr.findIndex(x => x.id === id);
    // console.log(indexOfProject);
    arr.splice(indexOfProject,1);
    this.setState(
      {
        projects: arr
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Header title='Project Manager'/>
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} deleteProject={this.handleDeleteProject.bind(this)}/>
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
