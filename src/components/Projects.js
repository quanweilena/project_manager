import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
  deleteItem(id) {
    this.props.deleteProject(id);
  }
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map( project => {
        return (
          <ProjectItem
            project={project}
            key={project.title}
            onDeleteItem={this.deleteItem.bind(this)}
          />
        );
      });
    }
    return (
      <div>
          <h3>Projects</h3>
          {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  deleteProject: PropTypes.func
}

export default Projects;
