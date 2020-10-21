import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="btn mb-4 m-2 btn-lg btn-danger center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      Add Dalton
    </button>
  );
};
export default Trigger;
