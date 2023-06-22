import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const { _id, name, image, recipe, price } = item;

	const handleAddToCart = (cart) => {
		console.log(cart);
		if (user && user.email) {
			const cartItem = {
				menuItemId: _id,
				name,
				image,
				price,
				userName: user?.displayName,
				email: user?.email,
			};
			fetch("http://localhost:5000/carts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(cartItem),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);

					if (data.insertedId) {
						Swal.fire({
							position: "center",
							title: "Added to cart",
							icon: "success",
							showConfirmButton: false,
							timer: 1500,
						});
					}
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			Swal.fire({
				title: "Please login to order the food",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3084d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Login Now!",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login");
				}
			});
		}
	};

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
						<button
							onClick={() => handleAddToCart(item)}
							className="btn border-0 border-b-[2px] btn-outline btn-success"
						>
							ADD TO CART
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
