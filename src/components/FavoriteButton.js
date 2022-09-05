import React from 'react'

export default function FavoriteButton({children, onClickHandler}) {
  return (
    <button className="favorite-button" onClick={onClickHandler}>
      {/* <img className="heart-icon" alt="" src={icon} /> */}
      {children}
    </button>
  )
}
