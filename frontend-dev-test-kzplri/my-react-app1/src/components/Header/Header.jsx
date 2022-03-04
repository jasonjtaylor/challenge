import React from "react";
import "../Header/Header.scss";

const PageHeader = () => {
	return (
		<>
			<section className="header">
				<div className="header-title">
					<h2 className="title">Social Media Dashboard</h2>
					<h3 className="inside-title">Total Followers: 23,004</h3>
				</div>
			</section>
		</>
	);
};

export default PageHeader;
