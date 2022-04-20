import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {

  const cartState = React.useContext(CartContext)

  const numberOfCartItems = cartState.items.reduce((acc, item) => {
      return acc + item.amount
  }, 0)

  return (
    <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
  )
}

export default HeaderCartButton