import SectionTitle from "../../../Components/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
	const [review, setReview] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/reviews")
			.then((res) => res.json())
			.then((data) => setReview(data));
	}, []);

	console.log(review);

	return (
		<div>
			<SectionTitle subHeading="What Our Client Say" heading="Testimonials" />
			<div>
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
					{review.map((item) => (
						<SwiperSlide key={item._id}>
							<div className="flex gap-5 flex-col items-center mx-24 my-12">
								<Rating
									style={{ maxWidth: 180 }}
									value={item.rating}
									readOnly
								/>
								<p className="text-6xl font-blod">❝</p>
								<p> {item.details} </p>
								<h3 className="text-4xl text-[#CD9003] font-semibold">
									{" "}
									{item.name}{" "}
								</h3>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonials;
