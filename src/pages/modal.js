import React from 'react'

import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main p-2 text-3xl">
        <button className='' type="button" onClick={handleClose}>
          X
        </button>
        <div className='h-{80vh} overflow-y-auto'>
        {children}
        </div>
      </div>
    </div>
  );
}; export default Modal