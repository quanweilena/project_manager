import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import $ from 'jquery';
// import uuid from 'uuid';
import Projects from './components/Projects';
import Header from './components/Header';
import AddProject from './components/AddProject';
import Todos from './components/Todos';
import './App.css';
import { connect } from 'react-redux';

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

  componentWillMount() {
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }



  handleDeleteProject(id){
    let arr = this.state.projects;
    let indexOfProject = arr.findIndex(x => x.id === id);
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
        <AddProject dispatch={this.props.dispatch} />
        <Projects dispatch={this.props.dispatch} projects={this.props.projects} />
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  console.log(state);
  return {projects : state.projects}
}

export default connect(mapStateToProps)(App);
