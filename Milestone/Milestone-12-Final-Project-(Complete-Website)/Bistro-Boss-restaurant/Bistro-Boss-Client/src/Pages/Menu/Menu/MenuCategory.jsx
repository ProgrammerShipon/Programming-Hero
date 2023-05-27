import { Link } from "react-router-dom";
import Cover from "../../Shayed/Cover/Cover";
import MenuItems from "../../Shayed/MenuItems";

const MenuCategory = ({ title, bgImg, menuItem }) => {
	console.log(title, bgImg, menuItem);
	return (
		<div className="py-6">
			{title && bgImg && <Cover img={bgImg} title={title} />}

			{menuItem && (
				<>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-6 pt-7">
						{menuItem.map((item) => (
							<MenuItems key={item._id} item={item} />
						))}
					</div>
				</>
			)}

			<div className="text-center py-4">
				<Link to={`/order/${title}`}>
					<button className="btn border-0 border-b-[2px] btn-outline btn-success">
						{" "}
						ORDER YOUR FAVOURITE FOOD{" "}
					</button>
				</Link>
			</div>
		</div>
	);
};

export default MenuCategory;
