import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
		document.title = `${title} - ToyCar`;
	}, [title]);
};

export default useTitle;
