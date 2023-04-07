import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import { toast } from 'react-toastify';

const Home = () => {
	const tshirts = useLoaderData();
   const [cart, setCart] = useState([])

	const handleAddToCart = (shirt) => {
      const exist = cart.find (ts => ts._id == shirt._id)
      if (exist) {
         toast('Already added item')
      } else {
         setCart([...cart, shirt])
      }
	};

   const handleRemoveToCart = (shirt) => {
      const RMitem = cart.filter(ts => ts._id != shirt)
      if(RMitem) {
		   setCart(RMitem)
      }
   }

	return (
		<div className="home-container">
			<div className="t-shirts-container">
				{tshirts.map((ts) => (
					<TShirt  key={ts.id} handleAddToCart={handleAddToCart} shirt={ts} />
				))}
			</div>

			<div className="cart-container">
				<Cart key={0} cart={cart} handleRemoveToCart={handleRemoveToCart} />
			</div>
		</div>
	);
};

export default Home;
