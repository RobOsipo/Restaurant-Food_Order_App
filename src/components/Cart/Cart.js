import React from 'react'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import Modal from '../UI/Modal'

const Cart = (props) => {

    const cartState = React.useContext(CartContext)

    const totalAmount = `$${cartState.totalAmount.toFixed(2)}`

    const hasItems = cartState.items.length > 0

    const cartItemRemoveHandler = (id) => {
        cartState.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        cartState.addItem({ ...item, amount: 1 })
    }


    const cartItems = (
    <ul className={classes['cart-items']}>
        {cartState.items.map((item, index) => {
            return <CartItem 
            key={index}
            name={item.name}
            amount={item.amount}
            price={item.price} 
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)} 
              />
        })}
    </ul>
    );

  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart