import { useEffect, useState } from "react";

const useMenu = () => {
	const [menu, setMenu] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("menu.json")
			.then((res) => res.json())
			.then((data) => {
				setMenu(data);
				setLoading(false);
			});
	}, []);

	const dessert = menu.filter((item) => item.category == "dessert");
	const drinks = menu.filter((item) => item.category == "drinks");
	const salad = menu.filter((item) => item.category == "salad");
	const popular = menu.filter((item) => item.category == "popular");
	const pizza = menu.filter((item) => item.category == "pizza");
	const soup = menu.filter((item) => item.category == "soup");
	const offered = menu.filter((item) => item.category == "offered");

	return [
		dessert,
		drinks,
		salad,
		popular,
		pizza,
		soup,
		offered,
		menu,
		isLoading,
	];
};

export default useMenu;
