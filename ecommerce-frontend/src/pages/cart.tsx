
// import axios from "axios";
import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "../components/cart-item";
// import {
//   addToCart,
//   calculatePrice,
//   discountApplied,
//   removeCartItem,
// } from "../redux/reducer/cartReducer";
// import { RootState, server } from "../redux/store";
// import { CartItem } from "../types/types";

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  // const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

const subtotal = 420;
const shippingCharges = 420;
const discount = 420;
const tax = 420;
const total = 420;
const cartItems = [
  {
    ProductId:"ekdhwb",
    photo:"https://i.imgur.com/uM37r1f.jpg",
    name: "Samsung Galaxy S21 Ultra 5G",
    price: 420,
    quantity: 1,
    stock:10
  }
];
const isValidCouponCode = true;

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            <CartItemCard
              // incrementHandler={incrementHandler}
              // decrementHandler={decrementHandler}
              // removeHandler={removeHandler}
              key={idx}
              cartItem={i}
            />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
