import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {

  DeleteItem(id){
    this.props.onDeleteItem(id);
  }

  render() {
    return (
      <li>
          <strong>{this.props.project.title}:</strong> -
          {this.props.project.category}
          <button href="#" onClick={this.DeleteItem.bind(this, this.props.project.id)}> Delete!</button>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDeleteItem: PropTypes.func
}

export default ProjectItem;
