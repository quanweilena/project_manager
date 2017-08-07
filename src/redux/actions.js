let actions =  {
	addPro: function (project) {
		return {
			type: 'ADD_PRO',
			project: project,
		}
	},

	deletePro: function (id) {
		return {
			type: 'DELETE_PRO',
			id: id,
		}
	}
}

export default actions;