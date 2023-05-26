import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import useTitle from "../useTitle";
import Gallery from "./Gallery";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogSection from "./BlogSection";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
	useTitle("Home");
	const [allToys, setAllToys] = useState([]);

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	useEffect(() => {
		fetch(`https://toy-marketplace-server-khaki-mu.vercel.app/all-toys`)
			.then((res) => res.json())
			.then((data) => {
				setAllToys(data);
			});
	}, []);

	return (
		<>
			<div data-aos="zoom-in">
				<Banner />
			</div>

			<Gallery allToys={allToys} />

			<ShopByCategory />

			<BlogSection allToys={allToys} />

			<Contact data-aos="zoom-in" />
		</>
	);
};

export default Home;
