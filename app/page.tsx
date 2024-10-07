import Link from "next/link";
import React from "react";

const HomePage = () => {
	return (
		<div className="">
			<h1 className="text-7xl">Home Page</h1>
			<Link href="/about" className="text-2xl text-cyan-200">
				About
			</Link>
		</div>
	);
};

export default HomePage;
