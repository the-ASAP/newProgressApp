import React from 'react'
import clsx from 'clsx'

import styles from "./index.module.scss"

const GreenButton = ({customClassName, children, ...props}) => (
  <button 
    type="button" 
    className={clsx(styles.main, customClassName)}
    {...props}
  >
    {children}
  </button>
)

export default GreenButton