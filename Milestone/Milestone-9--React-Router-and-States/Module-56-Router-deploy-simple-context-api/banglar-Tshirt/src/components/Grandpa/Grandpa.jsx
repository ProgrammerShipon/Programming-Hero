import React, { createContext, useState } from "react";
import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
	const ring = "diamon";
	const [money, setMoney] = useState(0);

	return (
		<div className="grandpa">
			<h2> This is Grandpa </h2>
         <p> Has Money: {money} </p>
			<MoneyContext.Provider value={[money, setMoney]}>
				<RingContext.Provider value="golden Ring">
					<section className="flex">
						<Father ring={ring} />
						<Uncle />
						<Aunty ring={ring} />
					</section>
				</RingContext.Provider>
			</MoneyContext.Provider>
		</div>
	);
};

export default Grandpa;
