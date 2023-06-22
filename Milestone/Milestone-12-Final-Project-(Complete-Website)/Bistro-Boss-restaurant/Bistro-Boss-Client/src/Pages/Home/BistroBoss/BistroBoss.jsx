import image from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
	return (
		<div>
			<div
				className="hero min-h-screen bg-fixed"
				style={{
					backgroundImage: `url("${image}")`,
				}}
			>
				<div className="hero-overlay bg-opacity-30"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-2xl bg-white text-gray-700 p-10 rounded">
						<h1 className="mb-5 text-5xl font-bold">BISTRO BOSS</h1>
						<p className="mb-5">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus, libero accusamus laborum deserunt ratione dolor
							officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
							nihil iusto ducimus incidunt quibusdam nemo.
						</p>
						<button className="btn border-0 border-b-[2px] btn-outline btn-success">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BistroBoss;
