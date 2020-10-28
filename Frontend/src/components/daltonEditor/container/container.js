import React, { Component } from 'react';
import { Modal } from '../modal/modal';
import TriggerButton from '../triggerButton/triggerButton';
import AuthService from "../../../services/auth.service";

export class Container extends Component {
  constructor(props) {
		super(props);
		
		this.state = { 
			isShown: false, 
			currentUser: AuthService.getCurrentUser()
		};
	}
	
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
		this.props.onClearDalton();
  };
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

	componentDidMount() {
    this.props.onRefParent(this);
  }

	componentWillUnmount() {
    this.props.onRefParent(undefined)
  }

  render() {
		let isLoggedIn = this.state.currentUser ? true : false
		
    return (
      <React.Fragment>
        <TriggerButton
          showModal={this.showModal}
          buttonRef={(n) => (this.TriggerButton = n)}
					enabled={isLoggedIn}
        />
        {this.state.isShown ? (
          <Modal
            onSubmit={this.props.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
						players={this.props.players}
						currentDalton={this.props.currentDalton}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Container;
