import React from "react";
import "./Blog.css";

const Blog = () => {
	return (
		<div className="custom-container">
			<div className="blog-page">
				<div>
					<h1> A. When should you use context API?</h1>
					<div>
						<p>
							The Context API in React is a way to pass data down the component
							tree without having to manually pass props at each level. Here are
							some situations where you might consider using the context API.
						</p>
					</div>
				</div>
				<div>
					<h1> B. What is a custom hook? </h1>
					<div>
						<p>
							A custom hook is a JavaScript function that uses one or more
							built-in hooks (such as useState, useEffect, useContext, etc.)
							and/or other custom hooks to encapsulate and reuse stateful logic
							across multiple React components.
						</p>
						<p>
							Custom hooks allow you to abstract the implementation details of
							stateful logic, making it easy to share and reuse code between
							components without repeating the same code or introducing
							unnecessary complexity.
						</p>
					</div>
				</div>
				<div>
					<h1> C. What is useRef ? </h1>
					<div>
						<p>
							In React, userRef is a built-in hook that returns a mutable Ref
							object that can be used to hold a reference to a DOM element or a
							value that persists across renders. useRef is often used to access
							and manipulate DOM elements, but it can also be used to store any
							value that needs to persist across renders without triggering a
							re-render.
						</p>
					</div>
				</div>
				<div>
					<h1> D. What is useMemo? </h1>
					<div>
						<p>
							In React, useMemo is a built-in hook that can be used to memoize a
							value or the return value of a function. Memoization is a
							technique used to optimize performance by caching expensive
							computations and returning cached values when the computation
							inputs do not change.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
