import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Projects extends Component {
  deleteItem(id) {
    this.props.deleteProject(id);
  }
  render() {
    let projectItems;
    if (this.props.projects) {
      // console.log(this.props.projects);
      projectItems = this.props.projects.map( project => {
        return (
          <ProjectItem
            project={project}
            key={project.id}
            dispatch={this.props.dispatch}
          />
        );
      });
    }
    return (
      <div className="container">
          <h3>Projects</h3>
          <div className="col-md-2"></div>
          <div className="col-md-8">
            {projectItems}
          </div>
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  deleteProject: PropTypes.func
}

export default Projects;
