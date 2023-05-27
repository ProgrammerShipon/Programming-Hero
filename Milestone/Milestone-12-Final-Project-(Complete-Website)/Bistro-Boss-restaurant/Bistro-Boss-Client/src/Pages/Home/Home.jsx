import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import BistroBoss from "./BistroBoss/BistroBoss";
import CallUs from "./CallUs";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu";
import Swipper from "./Swipper/Swipper";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Home | Bistro Boss </title>
			</Helmet>

			<Banner />

			<Swipper />

			<BistroBoss />

			<PopularMenu />

			<CallUs />

			<Featured />

			<Testimonials />
		</div>
	);
};

export default Home;
