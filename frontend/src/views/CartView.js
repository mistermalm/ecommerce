import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Cart } from 'react-bootstrap'
import Message from '../components/Message.js'
import { addToCart } from '../actions/cartActions.js'

const CartView = ({ match, location, history }) => {
  const productId = match.params.id
  // using query params to get quantity // expected output if quantity = 1 --> ?qty=1
  // then split the the param and convert it to a number, to get the actual quantity, else just set it to 1
  const quantity = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)
  console.log(cartItems)

  useEffect(() => {
    // will not always be a id in the cart..
    if (productId) {
      dispatch(addToCart(productId, quantity))
    }
  }, [dispatch, productId, quantity])

  return <div>Cart</div>
}

export default CartView
