import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Toy from "./Toy";
import { toast } from "react-hot-toast";
import Loading from "../../Components/Loading";

const MyToys = () => {
	const { user, loading } = useContext(AuthContext);
	const [myData, setMyData] = useState([]);
	const [callData, setCallData] = useState(true);
	const [asc, setAsc] = useState(true);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch(
			`https://toy-marketplace-server-khaki-mu.vercel.app/my-toys/${user?.email}`
		)
			.then((res) => res.json())
			.then((data) => {
				setMyData(data);
				setLoading(false);
			})
			.catch((err) => console.error(err));
	}, [user, callData]);

	useEffect(() => {
		setLoading(true);
		if (user && !loading) {
			fetch(
				`https://toy-marketplace-server-khaki-mu.vercel.app/mytoys/${
					asc ? "asc" : "desc"
				}?email=${user?.email}`
			)
				.then((res) => res.json())
				.then((data) => {
					setMyData(data);
					setLoading(false);
				});
		}
	}, [user, loading, asc]);

	const deleteHandler = (id) => {
		fetch(`https://toy-marketplace-server-khaki-mu.vercel.app/toy/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					toast.success("Your Toy Deleted");
					setCallData(!callData);
				}
			});
	};

	return (
		<div>
			<div className="container mx-auto">
				<div className="overflow-x-auto">
					<div className="overflow-x-auto w-full">
						<h1 className="text:md md:text-3xl text-[#18c4f7] font-bold md:my-6 my-4 text-center">
							My Posted Toys : {myData.length} |{" "}
							<button
								onClick={() => setAsc(!asc)}
								className="btn inline-flex transition duration-300 text-[#18c4f7] border border-[#18c4f7] bg-transparent !py-2 !px-6 focus:outline-none hover:border-transparent hover:bg-[#18c4f7] hover:text-gray-600 rounded"
							>
								{asc ? "High Price" : "Low Price"}
							</button>
						</h1>
						<table
							className={`${
								isLoading && "relative min-h-[250px] "
							} table table-zebra w-full text-center border shadow-md`}
						>
							{/* head */}
							<thead>
								<tr>
									<th></th>
									<th title="Image and Toy Name"> Image & Toy Name </th>
									<th title="Name">Seller</th>
									<th title="Sub Category">Sub-Category</th>
									<th title="Price">Price</th>
									<th title="Available Quantity">Quantity</th>
									<th> Edit Or Delete </th>
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
									{myData.map((toy, i) => (
										<Toy
											key={i}
											toy={toy}
											idx={i + 1}
											deleteHandler={deleteHandler}
										/>
									))}
								</tbody>
							)}
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyToys;
