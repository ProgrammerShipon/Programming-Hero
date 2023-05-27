const FoodCard = ({ item }) => {
	const { name, image, recipe, price } = item;

	return (
		<div>
			<div className="card bg-base-100 shadow-xl relative">
				<figure>
					<img src={`"${image}"`} alt={name} />
				</figure>
				<p className="absolute top-4 right-4 bg-slate-800 text-gray-100 px-3 py-1 rounded">
					{" "}
					$ {price}{" "}
				</p>
				<div className="card-body">
					<h2 className="card-title"> {name} </h2>
					<p> {recipe} </p>
					<div className="card-actions justify-center">
						<button className="btn btn-primary"> ADD TO CART </button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
