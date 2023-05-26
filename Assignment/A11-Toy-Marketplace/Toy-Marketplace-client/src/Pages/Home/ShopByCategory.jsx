import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactStars from "react-rating-stars-component";
import "react-tabs/style/react-tabs.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../Components/Loading";

const ShopByCategory = () => {
	const [toys, setToys] = useState([]);
	const [allToys, setAllToys] = useState([]);
	const { user, loading } = useContext(AuthContext);
	const [category, setCategory] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!loading) {
			fetch(`https://toy-marketplace-server-khaki-mu.vercel.app/all-toys`)
				.then((res) => res.json())
				.then((data) => {
					setAllToys(data);
				});
		}
	}, [loading, user, category]);

	useEffect(() => {
		if (!loading) {
			fetch(
				`https://toy-marketplace-server-khaki-mu.vercel.app/shopCategory/${category}`
			)
				.then((res) => res.json())
				.then((data) => {
					setToys(data);
				})
				.catch((err) => console.error(err));
		}
	}, [loading, user, category]);

	const tab = (catagory) => {
		setCategory(catagory);
		setToys(toys);
	};

	if (loading) {
		return <Loading></Loading>;
	}

	const ratingStart = {
		size: 30,
		edit: false,
		isHalf: true,
	};

	return (
		<div>
			<h2 className="text:md md:text-3xl text-[#18c4f7] font-bold md:my-6 my-4 text-center">
				Shop by Category
			</h2>
			<Tabs className="container mx-auto min-h-[300px]">
				<TabList>
					<Tab>All Toys</Tab>
					<Tab onClick={() => tab("Regular car")}>Regula Car</Tab>
					<Tab onClick={() => tab("Sports Car")}>Sports Car</Tab>
					<Tab onClick={() => tab("Mini police car")}>Mini Police Car</Tab>
				</TabList>

				<TabPanel>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-4">
						{allToys &&
							allToys?.slice(0, 6).map((toy) => (
								<div
									className="card glass w-full bg-base-100 rounded-md shadow-md"
									key={toy._id}
								>
									<figure>
										<img className="w-full h-52 " src={toy.imgUrl} />
									</figure>
									<div className="card-body">
										<h2 className="card-title">
											{toy.toyName}
											<div className="badge badge-secondary text-[8px] bg-white border-1 text-gray-800 ">
												NEW
											</div>
										</h2>
										<p className="text-green-600 font-bold">
											{" "}
											Price: ${toy.toyPrice}
										</p>
										<div className="card-actions flex justify-between items-center">
											{toy?.toyRating && (
												<ReactStars
													rating={toy.toyRating}
													ratingStart={ratingStart}
													size={50}
													edit={false}
													isHalf={true}
												/>
											)}
											<Link
												to={user ? `/toy/${toy._id}` : "#"}
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
												View details
											</Link>
										</div>
									</div>
								</div>
							))}
					</div>
				</TabPanel>

				<TabPanel>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-4">
						{toys &&
							toys?.slice(0, 6).map((toy) => (
								<div
									className="card glass w-full bg-base-100 rounded-md shadow-md"
									key={toy._id}
								>
									<figure>
										<img className="w-full h-52 " src={toy.imgUrl} />
									</figure>
									<div className="card-body">
										<h2 className="card-title">
											{toy.toyName}
											<div className="badge badge-secondary text-[8px] bg-white border-1 text-gray-800 ">
												NEW
											</div>
										</h2>
										<p className="text-green-600 font-bold">
											{" "}
											Price: ${toy.toyPrice}
										</p>
										<div className="card-actions flex justify-between items-center">
											{toy?.toyRating && (
												<div className=" py-3">
													<ReactStars {...ratingStart} value={toy?.toyRating} />
												</div>
											)}
											<Link
												to={user ? `/toy/${toy._id}` : "#"}
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
												View details
											</Link>
										</div>
									</div>
								</div>
							))}
					</div>
				</TabPanel>

				<TabPanel>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-4">
						{toys &&
							toys?.slice(0, 6).map((toy) => (
								<div
									className="card glass w-full bg-base-100 rounded-md shadow-md"
									key={toy._id}
								>
									<figure>
										<img className="w-full h-52 " src={toy.imgUrl} />
									</figure>
									<div className="card-body">
										<h2 className="card-title">
											{toy.toyName}
											<div className="badge badge-secondary text-[8px] bg-white border-1 text-gray-800 ">
												NEW
											</div>
										</h2>
										<p className="text-green-600 font-bold">
											{" "}
											Price: ${toy.toyPrice}
										</p>
										<div className="card-actions flex justify-between items-center">
											{toy?.toyRating && (
												<div className=" py-3">
													<ReactStars {...ratingStart} value={toy?.toyRating} />
												</div>
											)}
											<Link
												to={user ? `/toy/${toy._id}` : "#"}
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
												View details
											</Link>
										</div>
									</div>
								</div>
							))}
					</div>
				</TabPanel>

				<TabPanel>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-4">
						{toys &&
							toys?.slice(0, 6).map((toy) => (
								<div
									className="card glass w-full bg-base-100 rounded-md shadow-md"
									key={toy._id}
								>
									<figure>
										<img className="w-full h-52 " src={toy.imgUrl} />
									</figure>
									<div className="card-body">
										<h2 className="card-title">
											{toy.toyName}
											<div className="badge badge-secondary text-[8px] bg-white border-1 text-gray-800 ">
												NEW
											</div>
										</h2>
										<p className="text-green-600 font-bold">
											{" "}
											Price: ${toy.toyPrice}
										</p>
										<div className="card-actions flex justify-between items-center">
											{toy?.toyRating && (
												<div className=" py-3">
													<ReactStars {...ratingStart} value={toy?.toyRating} />
												</div>
											)}
											<Link
												to={user ? `/toy/${toy._id}` : "#"}
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
												View details
											</Link>
										</div>
									</div>
								</div>
							))}
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ShopByCategory;
