import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";

import bannerImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import drinksImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import MenuCategory from "./MenuCategory";

const Menu = () => {
	const [dessert, drinks, salad, pizza, soup, offered] = useMenu();

	return (
		<div>
			<Helmet>
				<title>Menu | Bistro Boss </title>
			</Helmet>

			{/* Our Menu Section */}
			<MenuCategory title={"Our Menu"} bgImg={bannerImg} menuItem={offered} />

			{/* Dessert Section */}
			<MenuCategory title={"Dessert"} bgImg={dessertImg} menuItem={dessert} />

			{/* Drinks Section */}
			<MenuCategory title={"Drinks"} bgImg={drinksImg} menuItem={drinks} />

			{/* Salad Section */}
			<MenuCategory title={"Salad"} bgImg={saladImg} menuItem={salad} />

			{/* Pizza Section */}
			<MenuCategory title={"Pizza"} bgImg={pizzaImg} menuItem={pizza} />

			{/* Soup Section */}
			<MenuCategory title={"Soup"} bgImg={soupImg} menuItem={soup} />
		</div>
	);
};

export default Menu;
