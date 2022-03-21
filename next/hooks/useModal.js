import { useReducer, createContext, useContext } from "react"
import { OPEN_MODAL, HIDE_MODAL } from "constants/types"
import ModalRoot from "components/common/ModalRoot"

const ModalContext = createContext({
  Modal: () => null,
  modalProps: {},
  showModal: () => undefined,
  hideModal: () => undefined,
})

const { Provider } = ModalContext
const ModalConsumer = ModalContext.Consumer

const modalReducer = (state, { type, Modal, modalProps }) => {
  switch (type) {
    case OPEN_MODAL:
      return {...state, Modal, modalProps }
    case HIDE_MODAL:
      return { ...state, Modal: null, modalProps: {} }
    default:
      throw new Error('Unspecified reducer action')
  }
}

const ModalProvider = ({children}) => {
  const initialState = {
  Modal: null,
  modalProps: {},
  showModal: (Modal, modalProps = {}) => {
    dispatch({ type: OPEN_MODAL, Modal, modalProps })
  },
  hideModal: () => {
    dispatch({ type: HIDE_MODAL })
  },
}
  const [state, dispatch] = useReducer(modalReducer, initialState)

  return (
    <Provider value={state}>
      {children}
      <ModalRoot />
    </Provider>
  )
}

const useModal = () => useContext(ModalContext)

export { ModalConsumer, ModalProvider, useModal}