import React, { Component } from 'react';
import PropTypes from 'prop-types';
import actions from '../redux/actions';

class ProjectItem extends Component {

  handleDelete(id){
    this.props.dispatch(actions.deletePro(this.props.project.id));
  }

  render() {
    return (
      <li className="list-group-item">
          <strong>{this.props.project.title}:</strong> -
          {this.props.project.category}
          <button className="btn btn-xs btn-danger pull-right" onClick={this.handleDelete.bind(this)}> Delete!</button>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDeleteItem: PropTypes.func
}

export default ProjectItem;
