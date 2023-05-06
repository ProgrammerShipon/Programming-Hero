import React, { useState } from "react";
import {
	GoogleMap,
	LoadScript,
	Marker,
	DirectionsService,
	DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
	width: "100vw",
	height: "100vw",
};

const center = {
	lat: 23.838633744803378,
	lng: 89.66817191562487,
};

function GoogleLocation() {
	const [response, setResponse] = useState(null);
	const origin = "mirpur 10 circle Dhaka";
	const destination = "Gulshan 1 circle Dhaka";
	const travelMode = "DRIVING";

	const DirectionsCallback = (res) => {
		console.log(res);

		if (res !== null) {
			if (res.status === "OK") {
				setResponse(res);
			} else {
				console.log("response : ", res);
			}
		}
	};

	return (
		<LoadScript googleMapsApiKey={import.meta.env.GOOGLE_APP_API}>
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
				{destination !== "" && origin !== "" && (
					<DirectionsService
						ontions={{
							destination: destination,
							origin: origin,
							travelMode: travelMode,
						}}
						callback={DirectionsCallback}
					/>
				)}

				{response !== null && (
					<DirectionsRenderer options={{ directions: response }} />
				)}
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
}

export default React.memo(GoogleLocation);
