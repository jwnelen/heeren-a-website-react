module.exports = (sequelize, Sequelize) => {
  const Player = sequelize.define("players", {
    player_id : {
			type: Sequelize.INTEGER,
			 primaryKey: true
		},
		name: {
      type: Sequelize.STRING
    },
    nickname: {
			type: Sequelize.STRING
		},
		singles_rating: {
			type: Sequelize.DOUBLE
		},
		singles_rating_ending_year: {
			type: Sequelize.INTEGER
		},
		doubles_rating: {
			type: Sequelize.DOUBLE
		},
		doubles_rating_ending_year: {
			type: Sequelize.INTEGER
		}
  }, {
		timestamps: 'false'
	});

  return Player;
};