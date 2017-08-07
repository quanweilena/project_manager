import uuid from 'uuid';
import 'object-assign';

let reducer = function (state, action) {
	switch (action.type) {
		case 'ADD_PRO':
			return {
				...state,
				projects: [...state.projects, action.project]
			}
		case 'DELETE_PRO':
			const id = action.id;
			// console.log(id);
			return {
				...state,
				projects: state.projects.filter(project => project.id !== id)
			}
			
		default:
			return state;
	}
}

export default reducer

