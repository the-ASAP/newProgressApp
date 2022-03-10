/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
import style from './index.module.scss'

const Project = (props) => {
  const { photo, text, tags } = props
  
  const [imageWidth, setImageWidth] = useState(null)
  const refImage = useRef(null)

  useEffect(() => setImageWidth(refImage.current.offsetWidth), [])

  return (
    <div className={style.project}>
      <div className={style.project__content}>
        <img ref={refImage} className={style.project__image}
          alt='project'
          src={photo}
        />
        <span className={style.project__text} style={{width: imageWidth}}>{text}</span>
        <div className={style.project__tags} style={{width: imageWidth}}>
          {tags?.map(tag => 
            <div className={style.project__tag} key={tag + Math.random()}>{tag}</div>
          )}
        </div>
      </div>
    </div> 
  )
}

export default Project