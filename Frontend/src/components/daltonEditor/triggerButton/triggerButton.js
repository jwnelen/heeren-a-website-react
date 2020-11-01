import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal, enabled }) => {
  return (
    <button
      className="btn mb-4 m-2 btn-secondary center modal-button"
      ref={buttonRef}
      onClick={showModal}
			disabled={!enabled}
    >
      Add Dalton
    </button>
  );
};
export default Trigger;
