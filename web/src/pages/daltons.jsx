import React, {useEffect, useState} from 'react';
import DaltonsList from 'components/daltonsList/daltonsList'

import api from '../data/api.js'

export default () => {

  const [daltons, setDaltons] = useState()
  const [players, setPlayers] = useState()
  const [currentDalton, setCurrentDalton] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [modalIsOpen, setModalOpen] = useState(false);

  useEffect(() => {
    api.getDaltons().then(d => {
      setDaltons(d)
      setIsLoading(false)
    })

    // this.getPlayersData();
  })

  const handleDaltonChange = (dalton) => {
    setCurrentDalton(dalton)
    // modal.current =;
  }
  const clearDalton = () => {
    setCurrentDalton({});
  }

  const onSubmit = () => {
    console.log("on submit")
  }

  if (isLoading) {
    return <h3 className='mt-4'>loading...</h3>
  }

  return (
      <div>
        <h1>Daltons</h1>
        <DaltonsList daltons={daltons} players={players} onSelectDalton={handleDaltonChange}/>

      </div>
  )
}


//onSubmit = (event, dalton, deletion = false) => {
//     event.preventDefault(event);
// 		const self = this;
//
// 		// Delete Dalton
// 		if(deletion) {
// 			api.deleteDalton(dalton)
// 				.then(res => {
// 					if(res.status === 200) {
// 						self.child.closeModal()
// 						self.getDaltonsData()
// 						window.alert("Dalton is deleted!");
// 					} else {
// 						window.alert("Could not delete dalton");
// 					}
// 				})
// 		} else {
//
// 		// Add Dalton
// 		if(dalton.dalton_id === null || dalton.dalton_id === -1) {
// 			delete dalton['dalton_id'];
//
// 			api.addDalton(dalton)
// 			.then(res => {
// 				if(res.status === 200) {
// 					self.child.closeModal()
// 					self.getDaltonsData()
// 					window.alert("Dalton is added!");
// 				} else {
// 					window.alert("Could not add dalton");
// 				}
// 			});
// 		} else { // Edit Dalton
// 			api.updateDalton(dalton)
// 				.then(res => {
// 					if(res.status === 200) {
// 						self.child.closeModal()
// 						self.getDaltonsData()
// 						window.alert("Dalton is updated!");
// 					} else {
// 						window.alert("Could not update dalton");
// 					}
// 				});
// 		}
// 		}
//   };