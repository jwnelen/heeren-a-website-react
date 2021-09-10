const db = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/auth.config");

const User = db.sequelize.model("User");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
      .then(user => {
        res.send({message: "User was registered successfully!"})
      })
      .catch(err => {
        res.status(500).send({message: err.message});
      });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
      .then(user => {
        if (!user) {
          return res.status(404).send({message: "User Not found."});
        }

        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }

        let token = jwt.sign({id: user.id}, config.secret, {
          expiresIn: 86400 // 24 hours
        });

        return res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          accessToken: token,
          user_player_id: user.user_player_id
        });
      })
      .catch(err => {
        return res.status(500).send({message: err.message});
      });
};