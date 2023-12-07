import React from 'react'

import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main p-2 text-3xl">
        <button className='' type="button" onClick={handleClose}>
          X
        </button>
        {children}
      </section>
    </div>
  );
}; export default Modal