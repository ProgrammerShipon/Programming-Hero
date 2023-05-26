import React from "react";
import "./Blogs.css";
import useTitle from "../useTitle";

const Blogs = () => {
	useTitle("Blog");

	return (
		<div>
			<div className="container mx-auto">
				<div className="blogs-content">
					<div>
						<h1>
							1. What is an access token and refresh token? how do they work and
							where should we store them on the client-side?
						</h1>
						<div>
							<p>
								<span className="font-semibold"> Access Token: </span> A
								credential issued by an authentication server to authorize
								access to specific resources. It is included in each request to
								prove authorization.
							</p>
							<p>
								<span className="font-semibold"> Refresh Token: </span> A
								long-lived credential that allows obtaining a new access token
								without reauthentication. It is securely stored and used to
								request a new access token when the current one expires.
							</p>
							<p>
								<span className="font-semibold"> Storage: </span> Access tokens
								can be stored in memory or secure storage mechanisms provided by
								the operating system. Refresh tokens should be stored in more
								secure locations like encrypted databases or secure key stores,
								avoiding local storage or cookies.
							</p>
						</div>
					</div>

					<div>
						<h1>2. Compare SQL and NoSQL databases?</h1>
						<div>
							<h2>SQL Databases : </h2>
							<ul>
								<li>Structured and based on a predefined schema</li>
								<li>Relational with defined relationships between tables</li>
								<li>ACID compliant for data consistency</li>
								<li>Enforce data integrity constraints</li>
								<li>Use SQL as the query language</li>
								<li>Scale vertically</li>
							</ul>

							<h2>NoSQL Databases:</h2>
							<ul>
								<li>Flexible and schema-less</li>
								<li>Non-relational, allowing for dynamic data structures</li>
								<li>Trade ACID compliance for scalability and performance </li>
								<li>No strict data integrity constraints</li>
								<li>Use a variety of query languages or APIs</li>
								<li>Scale horizontally</li>
							</ul>
						</div>
					</div>

					<div>
						<h1>3. What is express js? What is Nest JS?</h1>
						<div>
							<p>
								<span className="font-semibold">Express.js:</span> A web
								application framework for Node.js that simplifies handling HTTP
								requests, routing, and server-side logic.
							</p>
							<p>
								<span className="font-semibold">NestJS:</span> A progressive
								Node.js framework inspired by Angular, designed for building
								scalable and maintainable server-side applications. It combines
								TypeScript, Express.js, and other libraries for efficient
								development.
							</p>
						</div>
					</div>

					<div>
						<h1> 4. What is MongoDB aggregate and how does it work ?</h1>
						<div>
							<p>
								MongoDB's aggregate function is used for advanced data
								aggregation operations. It processes data through a pipeline
								consisting of multiple stages, where each stage performs a
								specific operation on the documents. The transformed documents
								pass through each stage in sequence, allowing for complex data
								manipulations and analysis.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
