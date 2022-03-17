import React from "react"
import ModalChat from "components/common/ModalChat"

export const AllModals = [
  {
    title: 'modalChat',
    component: <ModalChat />,
  },
  {
    title: 'modalOrder',
    component: 'jsx',
  }
]

export const ModalContext = React.createContext(AllModals)
