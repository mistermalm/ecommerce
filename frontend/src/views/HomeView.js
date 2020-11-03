import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products.js'
import Product from '../components/Product.js'

const HomeView = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Col>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Col>
    </>
  )
}

export default HomeView
