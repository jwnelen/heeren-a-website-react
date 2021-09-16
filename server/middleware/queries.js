const db = require("../models/index");
const Dalton = db.sequelize.model("Dalton");


// knex.raw("SELECT VERSION()").then(
//     (version) => console.log('connected with knex')
// ).catch((err) => {
//   console.log(err);
//   throw err
// })

const getDaltons = (req, res) => {
  console.log("getting all daltons")
  Dalton.findAll()
      .then((result) => res.send(result))
      .catch((err) => console.log(err))
}


//
// const getDaltonById = (req, res) => {
//   const id = parseInt(req.params.id)
//
//   knex.select('*').from('daltons').where('dalton_id', id)
//       .then((result) => {
//         if (result.length === 0) {
//           throw new Error
//         }
//         res.status(200).json(result)
//       }).catch(err => {
//     console.log(err);
//     throw err
//   })
// }

//
const addDalton = (req, res) => {
  const dalton = req.body;
  console.log(dalton)

  Dalton.create({
    reason: dalton.reason
  })
      .then((id) => res.status(200).json(id))
      .catch((err) => console.log('could not add dalton', err))
}

const updateDalton = (req, res) => {
  const _id = parseInt(req.params.id)
  const dalton = req.body

  Dalton.update(dalton,
      {
        where: {
          id: _id
        }
      }).then((id) => res.status(200).json(id))
      .catch((err) => console.log("could not update dalton", err))
}


const deleteDalton = (req, res) => {
  const _id = parseInt(req.params.id)
  console.log(_id, req.params)

  Dalton.destroy({
    where: {
      id: _id
    }
  }).then((id) => res.status(200).json(id))
      .catch((err) => console.log('could not delete dalton', err))
}

// const getPosts = (req, res) => {
//   knex.select('*').from('posts')
//       .then((result) => {
//         res.status(200).json(result)
//       }).catch(err => {
//     console.log(err);
//     throw err
//   })
// }
//
// const getDaltonsTookByPlayerId = (req, res) => {
//   const id = parseInt(req.params.id)
//   console.log('is called');
//   knex('daltons').count('person_took_id').where({person_took_id: id})
//       .then((result) => {
//         if (result.length === 0) {
//           throw new Error
//         }
//         console.log(result[0])
//         res.status(200).json(result[0])
//       }).catch(err => {
//     console.log(err);
//     throw err
//   })
// }

module.exports = {
  getDaltons,
  addDalton,
  // getDaltonById,
  deleteDalton,
  // getPosts,
  updateDalton,
  // getDaltonsTookByPlayerId
};