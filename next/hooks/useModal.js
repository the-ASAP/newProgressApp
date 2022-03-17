import React, { useContext } from "react"
import ReactDOM from 'react-dom'
import { ModalContext } from "context/modalContext"

export const useModal = () => {
  const modalsState = useContext(ModalContext)

  const createModal = (modalTitle) => {
    const { component } = modalsState.find(modal => modal.title === modalTitle)

    if (component) {
      const modalRoot = document.getElementById("modal-root")
      console.log(123)
      ReactDOM.createPortal(
        <div id="123">123</div>,
        document.body
      )
    }
  }

  const closeModal = () => {
    ReactDOM.createPortal(
      <></>,
      document.getElementById("modal-root")
    )
  }

  return { createModal, closeModal }
}