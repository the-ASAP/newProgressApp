import React from 'react'
import style from './index.module.scss'

const AllWidthButton = ({ children, ...props }) => {
  return (
    <button type="button" className={style.allWidthButton} {...props}>{children}</button>
  )
}

export default AllWidthButton