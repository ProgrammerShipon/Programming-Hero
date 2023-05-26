import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../useTitle";
import Loading from "../../Components/Loading";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AllToys = () => {
	const { user } = useContext(AuthContext);
	const [isLoading, setLoading] = useState(true);
	const [mainToys, setMainToys] = useState([]);
	const [showData, setShowData] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();

	useTitle("All Toys");

	useEffect(() => {
		fetch(`https://toy-marketplace-server-khaki-mu.vercel.app/all-toys`)
			.then((res) => res.json())
			.then((data) => {
				setMainToys(data);
				setShowData(data);
				setLoading(false);
			});
	}, []);

	const searchHandler = (text) => {
		if (text.length == 0) {
			setShowData(mainToys);
			return;
		}

		fetch(
			`https://toy-marketplace-server-khaki-mu.vercel.app/all-toy-search/${text}`
		)
			.then((res) => res.json())
			.then((data) => {
				setShowData(data);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<div className="text-center">
				<input
					onChange={(e) => searchHandler(e.target.value)}
					type="text"
					placeholder="Search here..."
					className="input input-bordered w-full max-w-xs"
				/>
			</div>

			<h1 className="text-3xl my-4 font-semibold text-center">
				{showData.length == mainToys.length ? (
					<>All Toys : {showData?.length}</>
				) : (
					<> Searching Toys : {showData?.length} </>
				)}
			</h1>
			<div>
				<div className="overflow-x-auto container mx-auto">
					<table
						className={`${
							isLoading && "relative min-h-[250px] "
						} table table-zebra w-full border border-gray-300 rounded-lg shadow-md text-center`}
					>
						{/* head*/}
						<thead>
							<tr>
								<th></th>
								<th title="Name">Name</th>
								<th title="Toy Name">Toy Name</th>
								<th title="Sub Category">Sub-Category</th>
								<th title="Price">Price</th>
								<th title="Available Quantity">Quantity</th>
								<th></th>
							</tr>
						</thead>

						{isLoading ? (
							<>
								<div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
									<div>
										<Loading />
									</div>
								</div>
							</>
						) : (
							<tbody>
								{showData.map((item, index) => (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{item?.sellerName}</td>
										<td>{item?.toyName}</td>
										<td>{item?.toyCategory}</td>
										<td>${item?.toyPrice}</td>
										<td>{item?.toyQuantity}</td>
										<td>
											<Link
												to={user ? `/toy/${item._id}` : "#"}
												className={`btn inline-flex transition duration-300 text-[#18c4f7] border border-[#18c4f7] bg-transparent !py-2 !px-6 focus:outline-none hover:border-transparent hover:bg-[#18c4f7] hover:text-gray-600 rounded`}
												onClick={() => {
													if (!user) {
														Swal.fire(
															"No Access!",
															"You need to login first to view details",
															"error"
														);
														navigate("/login", {
															state: { from: location },
															replace: true,
														});
													}
												}}
											>
												View Details
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						)}
					</table>
				</div>
			</div>
		</div>
	);
};

export default AllToys;
