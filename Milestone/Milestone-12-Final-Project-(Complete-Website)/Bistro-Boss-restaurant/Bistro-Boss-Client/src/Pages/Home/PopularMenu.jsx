import SectionTitle from "../../Components/SectionTitle";
import MenuItems from "../Shayed/MenuItems";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
	const [menu] = useMenu();
	const popular = menu.filter((item) => item.category == "popular");

	return (
		<section className="py-14">
			<SectionTitle subHeading="Popular Items" heading="From Our Menu" />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-6">
				{popular.map((item) => (
					<MenuItems key={item._id} item={item} />
				))}
			</div>
		</section>
	);
};

export default PopularMenu;
