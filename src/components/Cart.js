import React, { useContext } from "react";
import CartProductContainerRight from "./CartProductContainerRight";
import { CartContext } from "../Contexts";

function CartDetails() {
    const { cartItems } = useContext(CartContext);
    // console.log("Inside CartPage ", cartItems);
    return (
        <main className="cart-page">
            <section className="cart-products">
                <h2 className="cart-products__title">My Cart ({cartItems.length})</h2>
                {/* <CartProductCard /> */}
                {cartItems.map((item) => (
                    <CartProductContainerRight key={item.id} productDetails={item} />
                ))}
            </section>
            <aside className="price-details">
                <h2 className="price-details__title">Price Details</h2>
                <p>
                    Price (1 items) <span>$22.0</span>
                </p>
                <p>
                    Discount <span>-$1.0</span>
                </p>
                <p>
                    Total <span>$21.0</span>
                </p>
            </aside>
        </main>
    );
}

export default CartDetails;