module.exports = (sequelize, Sequelize) => {
  const Dalton = sequelize.define("daltons", {
    dalton_id : {
			type: Sequelize.INTEGER,
			allowNull: false,
      autoIncrement: true,
			primaryKey: true
		},
		reason: {
      type: Sequelize.STRING
    },
		person_took_id: {
			type: Sequelize.INTEGER
		},
	}, {
		timestamps: 'false'
	});
	
	Dalton.removeAttribute('id');
	
	return Dalton;
};