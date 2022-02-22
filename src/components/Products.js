import React, { Component } from "react";
import "./Product.css";

const products = [
  {
    emoji: "🍦",
    name: "ice cream",
    price: 5,
  },
  {
    emoji: "🍩",
    name: "donuts",
    price: 2.5,
  },
  {
    emoji: "🍉",
    name: "watermelon",
    price: 4,
  },
];

export default class Product extends Component {
  state = {
    cart: [],
    total: 0,
  };
  addItem = (product) => {
    this.setState({
      cart: [...this.state.cart, product.name],
      total: this.state.total + product.price,
    });
  };

  remove = (product) => {
    let newCart = this.state.cart;
    let where = newCart.indexOf(product.name);
    //console.log(where);
    if (where === -1) {
      return;
    }
    newCart.splice(where, 1);
    this.setState({
      cart: newCart,
      total: this.state.total - product.price,
    });
  };
  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  render() {
    console.log(this.state);
    return (
      <div className="wrapper">
        <div>Shopping Cart: {this.state.cart.length} total items.</div>
        <div>
          Total:{" "}
          {this.state.total.toLocaleString(undefined, this.currencyOptions)}
        </div>
        <div>
          {products.map((item, index) => (
            <div key={index}>
              <div className="product">
                <span role="img" aria-label={item.name}>
                  {item.emoji}
                </span>
              </div>
              <button onClick={() => this.addItem(item)}>Add</button>
              <button onClick={() => this.remove(item)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
