import React from 'react'
import classes from "./HeaderButton.module.css"
import CartIcon from '../Icons/CartIcon'

export const HeaderButton = () => {
  return (
    <button className={classes.button}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span>3</span>
    </button>
  )
}
