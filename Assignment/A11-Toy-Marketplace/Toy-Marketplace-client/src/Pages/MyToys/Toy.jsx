import React, { useContext, useState } from "react";
import { FaRegEdit, FaTrashAlt, FaWindowClose } from "react-icons/fa";
import Select from "react-select";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Toy = ({ toy, idx, deleteHandler }) => {
	const {
		imgUrl,
		sellerEmail,
		sellerName,
		toyCategory,
		toyDescription,
		toyName,
		toyPrice,
		toyQuantity,
		toyRating,
	} = toy;

	return (
		<>
			<tr>
				<th>{idx}</th>
				<td>
					<div className="flex items-center space-x-3">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								<img src={toy?.imgUrl} alt="Avatar Tailwind CSS Component" />
							</div>
						</div>
						<div className="text-left">
							<div className="font-bold"> {toy?.toyName} </div>
							<div className="text-sm opacity-50">
								{" "}
								{toy?.toyDescription.length > 30
									? toy?.toyDescription.slice(0, 30) + "..."
									: toy?.toyDescription}{" "}
							</div>
						</div>
					</div>
				</td>
				<td>
					{toy?.sellerName}
					<br />
					<span className="badge badge-ghost badge-sm">{toy?.sellerEmail}</span>
				</td>
				<td>{toy?.toyCategory}</td>
				<td>{toy?.toyPrice}</td>
				<td>{toy?.toyQuantity}</td>
				<th>
					<div className="flex gap-3 justify-center">
						<Link
							to={`/toyUpdate/${toy?._id}`}
							className="btn btn-outline btn-secondary"
						>
							<FaRegEdit className="w-4 h-4" />
						</Link>
						<button
							onClick={() => deleteHandler(toy?._id)}
							className="btn btn-outline btn-secondary"
						>
							<FaTrashAlt className="w-4 h-4" />{" "}
						</button>
					</div>
				</th>
			</tr>
		</>
	);
};

export default Toy;
