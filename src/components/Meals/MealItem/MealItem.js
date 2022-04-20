import React from 'react'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'

const MealItem = (props) => {

    const cartState = React.useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
      cartState.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      })
    }

  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
    </li>
  )
}

export default MealItem