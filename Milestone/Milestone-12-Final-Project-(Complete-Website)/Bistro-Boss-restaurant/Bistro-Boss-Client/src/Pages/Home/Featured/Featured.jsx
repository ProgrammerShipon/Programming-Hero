import SectionTitle from "../../../Components/SectionTitle";
import image from "../../../assets/home/featured.jpg";

const Featured = () => {
	return (
		<div
			className="featured bg-fixed text-white my-20"
			style={{
				backgroundImage: `url("${image}")`,
			}}
		>
			<div className="bg-slate-700 bg-opacity-40 pt-8">
				<SectionTitle subHeading="check it out" heading="Featured Item" />
				<div className="md:flex justify-center items-center pb-20 pt-12 px-36">
					<div>
						<img className="rounded-lg" src={image} alt="" />
					</div>
					<div className="md:ml-10">
						<p> Aug 20, 2025</p>
						<p className="uppercase text-xl my-4"> Where can i get some? </p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
							esse exercitationem pariatur magnam nesciunt! Harum, optio
							accusantium iusto recusandae maxime aperiam facere tempora
							officiis, alias exercitationem nostrum repudiandae doloribus eos
							dolor? Quis eos ullam ea officia perspiciatis expedita assumenda,
							cupiditate iste maiores beatae quos. Numquam ea corporis magnam
							sapiente iste!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
