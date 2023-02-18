import React from "react";
import classes from "../components/Modal.module.css";

function Modal({ children, onClose }) {
  function dialogClickHandler(event) {
    event.stopPropagation();
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onClose}>
        <dialog open className={classes.modal} onClick={dialogClickHandler}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
