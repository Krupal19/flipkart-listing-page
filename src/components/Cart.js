import React from 'react';
import CartDetails from './CartDetails';
import CartProductContainerRight from './CartProductContainerRight';

function Cart() {

    return (
        <div className='container'>
            <CartDetails />
            <CartProductContainerRight />
        </div>
    )
}


export default Cart;