import React from 'react'
import style from './index.module.scss'

const AllWidthButton = ({ children }) => {
  return (
    <button type="button" className={style.allWidthButton}>{children}</button>
  )
}

export default AllWidthButton