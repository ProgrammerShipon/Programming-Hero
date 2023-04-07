import React from "react";
import './Cart.css'

const Cart = ({ cart, handleRemoveToCart }) => {
	let message;
	if (cart.length === 0) {
		message = <p> Please add some products </p>;
	} else {
		message = (
			<div>
				<h3> Boroloxx </h3>
				<p>
					<small> Thanks for giving your money</small>
				</p>
			</div>
		);
	}

	return (
		<div>
			<h2 className={cart.length === 1 ? ' blue ' : ' red ' } > Order Summary : {cart.length} </h2>

         <p className={`bold ${cart.length == 2 ? ' yellow ' : 'purple' }`}>Something</p>

			{cart.length > 2 ? <span> Aro kino </span> : <span> fokira</span>}

			{message}
			{cart.map((ts) => (
				<p key={ts._id}>
					{ts.name}
					<button onClick={() => handleRemoveToCart(ts._id)}>X</button>
				</p>
			))}

         {
            cart.length === 2 && <p>Double bonanza !!! </p>
         }

         {
            cart.length === 3 || <h3> Tinta to hoilo na !!!</h3>
         }
		</div>
	);
};

export default Cart;



/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components 
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical || ( if the condition is false then the next thing will be displayed)
 */

/**
 * CONDITIONAL CSS Class 
 * 1. use ternary
 * 2. ternary inside template string
 */
