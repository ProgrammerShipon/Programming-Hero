import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import SectionTitle from "../../../Components/SectionTitle";

const Swipper = () => {
	return (
		<section>
			<SectionTitle
				subHeading="From 11:00am to 10:00pm"
				heading={`ODER ONLINE`}
			/>

			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper mb-24"
			>
				<SwiperSlide className="relative">
					<img src={slide1} alt="" />
					<h3 className="drop-shadow-2xl text-white shadow-black text-4xl z-10 bottom-[10%] left-1/2 -translate-x-1/2  absolute">
						{" "}
						Salads{" "}
					</h3>
				</SwiperSlide>

				<SwiperSlide className="relative">
					<img src={slide2} alt="" />
					<h3 className="drop-shadow-2xl text-white shadow-black text-4xl z-10 bottom-[10%] left-1/2 -translate-x-1/2  absolute">
						{" "}
						Pizzas{" "}
					</h3>
				</SwiperSlide>
				<SwiperSlide className="relative">
					<img src={slide3} alt="" />
					<h3 className="drop-shadow-2xl text-white shadow-black text-4xl z-10 bottom-[10%] left-1/2 -translate-x-1/2  absolute">
						{" "}
						Soups{" "}
					</h3>
				</SwiperSlide>
				<SwiperSlide className="relative">
					<img src={slide4} alt="" />
					<h3 className="drop-shadow-2xl text-white shadow-black text-4xl z-10 bottom-[10%] left-1/2 -translate-x-1/2  absolute">
						{" "}
						Desserts{" "}
					</h3>
				</SwiperSlide>
				<SwiperSlide className="relative">
					<img src={slide5} alt="" />
					<h3 className="drop-shadow-2xl text-white shadow-black text-4xl z-10 bottom-[10%] left-1/2 -translate-x-1/2  absolute">
						{" "}
						Salads{" "}
					</h3>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Swipper;
