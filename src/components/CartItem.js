import React from "react";

export default function CartItem(props) {
  console.log(props.item);
  console.log(CartItem.length);

  const handleIncrement = () => {
    console.log(
      "the total price is " +
        props.item.amount * props.item.defaultProductVariant.price
    );
    props.editCartItems(props.item.slug.current, 1);
  };
  const handleDecrement = () => {
    props.editCartItems(props.item.slug.current, -1);
  };
  if (props.item.amount) {
    return (
      <div className="cartItem">
        <img src={props.item.defaultProductVariant.imageUrl} />
        <h1>{props.item.title}</h1>
        <div className="btnInCart">
          <button className="down" onClick={handleDecrement}>
            -
          </button>
          <p>{props.item.amount}</p>
          <button className="up" onClick={handleIncrement}>
            +
          </button>
        </div>
        <h3>
          {props.item.defaultProductVariant.price * props.item.amount + "kr"}
        </h3>
      </div>
    );
  } else {
    return null;
  }
}
