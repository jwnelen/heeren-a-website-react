module.exports = (sequelize, Sequelize) => {
	const Post = sequelize.define("posts", {
		post_id : {
			type: Sequelize.INTEGER,
			 primaryKey: true
		},
		date: {
      type: Sequelize.DATE
    },
		title: {
      type: Sequelize.STRING
    },
		body: {
      type: Sequelize.STRING
    }
	}, {
			timestamps: 'false'
		});

	return Post
}