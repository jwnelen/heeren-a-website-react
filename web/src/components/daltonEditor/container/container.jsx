import React, {useEffect, useRef, useState} from 'react';
import {Modal} from '../modal/modal';
import TriggerButton from '../triggerButton/triggerButton';
import AuthService from "../../../services/auth.service";

const Container = ({currentDalton, onClearDalton, onRefParent, onSubmit}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)
  const modalRef = useRef(null)

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

  useEffect(() => {
    setLoggedIn(AuthService.getCurrentUser()?.username)
    // onRefParent(this)
    // return (onRefParent(undefined))
  }, [])

  return (
      <React.Fragment>
        <TriggerButton
            showModal={showModal}
            // buttonRef={(n) => (this.TriggerButton = n)}
            enabled={isLoggedIn}
        />
        {isVisible ? (
            <Modal
                ref={modalRef}
                onSubmit={onSubmit}
                buttonRef={(n) => (this.closeButton = n)}
                closeModal={closeModal}
                // onKeyDown={this.onKeyDown}
                // onClickOutside={this.onClickOutside}
                // players={this.props.players}
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



