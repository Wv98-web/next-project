import React, { Component } from 'react';
import Head from 'next/head';

export class Cart extends Component {
  render() {
    return (
      <div>
        <h1>Cart</h1>
        <Head>
          <meta name="description" content="这是购物车页" />
        </Head>
      </div>
    );
  }
}

export default Cart;
