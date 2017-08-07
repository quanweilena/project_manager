import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import actions from '../redux/actions';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }
  static defaultProps = {
    categories : [
      'Web design',
      'Mobile development',
      'Web development'
    ]
  }

  handleSubmit(e) {
    if(this.refs.title.value === '') {
      alert('Title is required');
    } else {
      this.setState({
        newProject: {
          id:uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, function(){
        // console.log(this.state);
        // this.props.addProject(this.state.newProject);
          this.props.dispatch(actions.addPro(this.state.newProject))
      })
    }
    // console.log('submit');
    e.preventDefault();

  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div className="container">
        <h3>Add project</h3>
        <div className="row">
          <div className="col-md-4"></div>
          <form onSubmit={this.handleSubmit.bind(this)} className="form-group col-md-4">
            <div>
              <label>Title: </label>
              <br />
              <input type="text" ref="title" className="form-control" />
            </div>
            <br />
            <div>
              <label>Category: </label>
              <br />
              <select ref="category" className="form-control">
                {categoryOptions}
              </select>
            </div>
            <br />
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  addProject: PropTypes.func,
  newProject: PropTypes.object,
  categories: PropTypes.array
}

export default AddProject;
