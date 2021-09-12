import React, {useEffect, useState} from 'react';
import {Modal} from '../modal/modal';
import TriggerButton from '../triggerButton/triggerButton';
import AuthService from "../../../services/auth.service";

const Container = ({currentDalton, onClearDalton, onSubmit}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)

  const toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

  const showModal = () => {
    setIsVisible(true)
    toggleScrollLock();
  }
  const closeModal = () => {
    setIsVisible(false)
    toggleScrollLock()
    onClearDalton()
  }

  const onKeyDown = () => {
    closeModal()
  }


  useEffect(() => {
    setLoggedIn(AuthService.getCurrentUser()?.username)
  }, [])

  return (
      <React.Fragment>
        <TriggerButton
            showModal={showModal}
            enabled={isLoggedIn}
        />
        {isVisible ? (
            <Modal
                onSubmit={onSubmit}
                closeModal={closeModal}
                onKeyDown={onKeyDown}
                onClickOutside={closeModal}
                players={[]}
                currentDalton={currentDalton}
            />
        ) : null}
      </React.Fragment>
  );
}

export default Container


// showModal = () => {
//   this.setState({ isShown: true }, () => {
//     this.closeButton.focus();
//   });
//   this.toggleScrollLock();
// };
// closeModal = () => {
//   this.setState({ isShown: false });
//   this.TriggerButton.focus();
//   this.toggleScrollLock();
// 	this.props.onClearDalton();
// };
// onKeyDown = (event) => {
//   if (event.keyCode === 27) {
//     this.closeModal();
//   }
// };
// onClickOutside = (event) => {
//   if (this.modal && this.modal.contains(event.target)) return;
//   this.closeModal();
// };



