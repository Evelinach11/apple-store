import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Helmet from "../Helmet";
import CartItem from "../CartItem";
import Button from "../Button";

import productData from "../../assets/fake-data/products";
import numberWithCommas from "../../utils/numberWithCommas";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return (
    <Helmet title="Cart">
      <div className="cart__list">
        {cartProducts.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </div>
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Містить {totalProducts} продуктів у кошику</p>
            <div className="cart__info__txt__price">
              <span>Ціна:</span>{" "}
              <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block">Купити</Button>
            <Link to="/catalog">
              <Button size="block">Продовжити покупки</Button>
            </Link>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
