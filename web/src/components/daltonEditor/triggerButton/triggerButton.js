import React from 'react';
const triggerButton = ({ showModal, enabled }) => {
  return (
    <button
      className="btn mb-4 m-2 btn-lg btn-danger center modal-button"
      onClick={showModal}
			disabled={!enabled}
    >
      Dalton toevoegen
    </button>
  );
};
export default triggerButton;
