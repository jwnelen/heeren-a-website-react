import React, {useCallback, useRef} from 'react';

import ModalContainer from 'components/daltonEditor/container/container'

import './modal.css'

export const Modal = ({
                        isOpen,
                        onClose
                      }) => {

  const containerRef = useRef()
  const tryClose = useCallback(
      (event) => {
        if (
            typeof onClose === "function" &&
            event.target === event.currentTarget
        ) {
          onClose();
        }
      },
      [onClose]
  );

  return (
      <ModalContainer isOpen={isOpen}>
        <div
            ref={containerRef}
            onClick={tryClose}>
        </div>
      </ModalContainer>
  )
}
export default Modal;

//   return ReactDOM.createPortal(
//       <FocusTrap>
//         <aside
//             tag="aside"
//             role="dialog"
//             tabIndex="-1"
//             aria-modal="true"
//             className="modal-cover"
//             onClick={onClickOutside}
//             onKeyDown={onKeyDown}
//         >
//           <div className="modal-area">
//             <button
//                 aria-label="Close Modal"
//                 aria-labelledby="close-modal"
//                 className="_modal-close"
//                 onClick={onCloseModal}
//             >
//             <span id="close-modal" className="_hide-visual">
//               Close
//             </span>
//               <svg className="_modal-close-icon" viewBox="0 0 40 40">
//                 <path d="M 10,10 L 30,30 M 30,10 L 10,30"/>
//               </svg>
//             </button>
//             <div className="modal-body">
//               <Form players={players} onSubmit={onSubmit} currentDalton={currentDalton}/>
//             </div>
//           </div>
//         </aside>
//       </FocusTrap>,
//       document.body
//   );
// };

