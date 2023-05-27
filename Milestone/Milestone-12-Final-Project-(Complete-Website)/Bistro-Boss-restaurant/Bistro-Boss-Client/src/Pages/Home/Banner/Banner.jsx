import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
	return (
		<Carousel className="text-center">
			<div>
				<img src={img1} />
				<p className="legend">Legend 1</p>
			</div>
			<div>
				<img src={img2} />
				<p className="legend">Legend 2</p>
			</div>
			<div>
				<img src={img3} />
				<p className="legend">Legend 3</p>
			</div>
			<div>
				<img src={img4} />
				<p className="legend">Legend 3</p>
			</div>
			<div>
				<img src={img5} />
				<p className="legend">Legend 3</p>
			</div>
			<div>
				<img src={img6} />
				<p className="legend">Legend 3</p>
			</div>
		</Carousel>
	);
};

export default Banner;
