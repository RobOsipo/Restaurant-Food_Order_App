import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = React.useState(false)

  const cartState = React.useContext(CartContext)
  
  const { items } = cartState

  const numberOfCartItems = items.reduce((acc, item) => {
      return acc + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : '' }`

  React.useEffect(() => {

    if (cartState.items.length === 0){return}

    setButtonIsHighlighted(true)

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false)
    }, 300)
    
    return () => {
      clearTimeout(timer)
  }
  }, [items])

  return (
    <button onClick={props.onClick} className={btnClasses}>
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