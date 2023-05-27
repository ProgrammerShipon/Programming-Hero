import Cover from "../../Shayed/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Order = () => {
	const [popular, offered, salad, pizza, soup, dessert, drinks] = useMenu();
	const categories = [
		"popular",
		"Offered",
		"Salad",
		"Pizza",
		"Soup",
		"Dessert",
		"Drinks",
	];

	const { category } = useParams();
	const initialIndex = categories.indexOf(category);
	const [tabIndex, setTabIndex] = useState(
		initialIndex == -1 ? 0 : initialIndex
	);

	console.log(category, initialIndex, tabIndex);

	return (
		<>
			<div>
				<Cover title={"Order Page"} img={orderImg} />
			</div>

			<section className="py-10">
				<Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
					<TabList className="mb-5">
						<Tab>popular</Tab>
						<Tab>offered</Tab>
						<Tab>salad</Tab>
						<Tab>pizza</Tab>
						<Tab>soup</Tab>
						<Tab>desserts</Tab>
						<Tab>drinks</Tab>
					</TabList>

					<TabPanel>
						<OrderTab items={popular} />
					</TabPanel>

					<TabPanel>
						<OrderTab items={offered} />
					</TabPanel>

					<TabPanel>
						<OrderTab items={salad} />
					</TabPanel>

					<TabPanel>
						<OrderTab items={pizza} />
					</TabPanel>

					<TabPanel>
						<OrderTab items={soup} />
					</TabPanel>

					<TabPanel>
						<OrderTab items={dessert} />
					</TabPanel>

					<TabPanel>
						<OrderTab items={drinks} />
					</TabPanel>
				</Tabs>
			</section>
		</>
	);
};

export default Order;
