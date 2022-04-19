import React from 'react'
import mealsImage from '../../assets/meals.jpg' // ! can import images like this
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <h1>The Robstaurant</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="a table spread of food" />
        </div>
    </>
  )
}

export default Header