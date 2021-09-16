import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL || "";
const apiUrl = `${baseUrl}/api`;

async function getPlayers() {
	// return fetch(apiUrl + '/players')
  //     .then(response => response.json())
  //     .catch((error) => console.log('error in api', error))
}

async function getPlayerById(id) {
  return fetch(apiUrl + '/players/' + id)
      .then(response => response.json())
      .catch((error) => console.log('error in api', error))
}

async function getPlayersIdAndName() {
  return fetch(apiUrl + '/players/compressed')
      .then(response => response.json())
      .then(result => {
        // computing the pairs
        let pairs = {};
        for (let i = 0; i < result.length; i++) {
          pairs[result[i].player_id] = result[i].nickname
        }
        return pairs;
      })
      .catch((error) => console.log('error in api', error))

}

async function updatePlayer(id, data) {
  delete data['player_id']

  return axios.put(apiUrl + "/players/" + id, data)
      .then(response => console.log(response))
}

async function getDaltons() {
  return fetch(apiUrl + '/daltons')
      .then(response => response.json())
      .catch((error) => console.log('error in api', error))
};

async function getDaltonById(id) {
  if (id) {
    return fetch(apiUrl + '/daltons/' + id)
        .then(response => response.json())
        .catch((error) => console.log('error in api', error))
  } else {
    const error = new Error();
    error.info = {
      type: 'Error',
      message: 'Could not edit Dalton: '
    }
    return (error);
  }
}

// TODO
async function addDalton(dalton) {
  console.log('dalton in api function: ' + JSON.stringify(dalton));

  let response = await fetch(apiUrl + '/daltons', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8' // Indicates the content
    },
    body: JSON.stringify(dalton)
  });

  let result = await response;

  if (response.ok) {
    return result
  } else {
    const error = new Error();
    error.info = {
      type: 'Error',
      message: 'Could not add Dalton: ' + JSON.stringify(dalton)
    }
    return (error);
  }
};

async function deleteDalton(dalton) {
  console.log(dalton)

  let response = await fetch(apiUrl + '/daltons/' + dalton.id, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8' // Indicates the content
    },
  });

  let result = await response;
  if (response.ok) {
    return result
  } else {
    const error = new Error();
    error.info = {
      type: 'Error',
      message: 'Could not delete Dalton: ' + JSON.stringify(dalton)
    }
    return (error);
  }
}

async function updateDalton(dalton) {
  const id = dalton.id;
  console.log('id in api: ' + id);

  let response = await fetch(apiUrl + '/daltons/' + id, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8' // Indicates the content
    },
    body: JSON.stringify(dalton)
  });

  let result = await response;
  if (response.ok) {
    return result
  } else {
    const error = new Error();
    error.info = {
      type: 'Error',
      message: 'Could not update Dalton: ' + JSON.stringify(dalton)
    }
    return (error);
  }
}

async function getDaltonsTookByPlayerId(id) {
  return fetch(apiUrl + '/daltons/daltonsTook/' + id)
      .then(response => response.json())
      .catch((error) => console.log('error in api', error))
};

async function getPosts() {
  return fetch(apiUrl + '/posts')
      .then(response => response.json())
      .catch((error) => console.log('error in api', error))
};

export default {
  getPlayers,
  getPlayerById,
  getDaltons,
  getPlayersIdAndName,
  getDaltonsTookByPlayerId,
  updatePlayer,
  addDalton,
  deleteDalton,
  updateDalton,
  getDaltonById,
  getPosts
};


