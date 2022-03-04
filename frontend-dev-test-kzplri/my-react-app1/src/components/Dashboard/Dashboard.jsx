import React from "react";
import "../Dashboard/Dashboard.scss";
import Facebook from "../../assets/images/icon-facebook.svg";
import Instagram from "../../assets/images/icon-instagram.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import Up from "../../assets/images/icon-up.svg";
import Youtube from "../../assets/images/icon-youtube.svg";
import Down from "../../assets/images/icon-down.svg";

const Dashboard = () => {
	return (
		<>
			<section className="card-section">
				<div className="card-category-1">
					<div className="basic-card">
						<div className="card-content">
							<img src={Facebook} alt="facebook icon" />
							<p>@nathanf</p>
							<span className="card-title">1987</span>
							<p className="card-text">FOLLOWERS</p>
							<p className="card-text">
								<img src={Up}></img>12 Today
							</p>
						</div>
					</div>
				</div>
				<div className="card-category-1">
					<div className="basic-card">
						<div className="card-content">
							<img src={Facebook} alt="facebook icon" />
							<p>@nathanf</p>
							<span className="card-title">1044</span>
							<p className="card-text">FOLLOWERS</p>
							<p className="card-text">
								<img src={Up}></img>99 Today
							</p>
						</div>
					</div>
				</div>
				<div className="card-category-1">
					<div className="basic-card">
						<div className="card-content">
							<img src={Instagram} alt="instagram icon" />
							<p>@realnathanf</p>
							<span className="card-title">11K</span>
							<p className="card-text">FOLLOWERS</p>
							<p className="card-text">
								<img src={Up}></img>1099 Today
							</p>
						</div>
					</div>
				</div>
				<div className="card-category-1">
					<div className="basic-card">
						<div className="card-content">
							<img src={Youtube} alt="youtube icon" />
							<p>Nathan .F</p>
							<span className="card-title">8239</span>
							<p className="card-text">FOLLOWERS</p>
							<p className="card-text">
								<img src={Down}></img>144 Today
							</p>
						</div>
					</div>
				</div>
			</section>
			<div>
				<h2 className="title-two">Overview - Today</h2>
			</div>
			<section className="card-section">
				<div className="card-category-1">
					<div className="basic-card">
						<div className="card-content">
							<p className="card-text">Page Views</p>
							<span className="card-title">87</span>
							<p className="card-text">
								<img src={Up}></img>3%
							</p>
							<img src={Facebook} alt="facebook icon" />
						</div>
					</div>
				</div>
				<div className="card-category-1">
					<div className="basic-card">
						<div className="card-content">
							<p className="card-text">Likes</p>
							<span className="card-title">52</span>
							<p className="card-text">
								<img src={Down}></img>2%
							</p>
							<img src={Facebook} alt="" />
						</div>
					</div>
				</div>
				<div className="card-category-1">
					<div className="basic-card">
						<div className="card-content">
							<p className="card-text">Likes</p>
							<span className="card-title">5462</span>
							<p className="card-text">
								<img src={Up}></img>2257%
							</p>
							<img src={Instagram} alt="" />
						</div>
					</div>
				</div>
				<div className="card-category-1">
					<div className="basic-card">
						<div className="card-content">
							<p className="card-text">Profile Views</p>
							<span className="card-title">
								<img src={Up}></img>52K
							</span>
							<p className="card-text">
								<img src={Up}></img>1375%
							</p>
							<img src={Instagram} alt="" />
						</div>
					</div>
				</div>
			</section>
			<section className="card-section">
				<div className="card-category-1">
					<div className="basic-card">
						<div className="card-content">
							<p className="card-text">Retweets</p>
							<span className="card-title">117</span>
							<p className="card-text">
								<img src={Up}></img>303%
							</p>
							<img src={Twitter} alt="" />
						</div>
					</div>
				</div>
				<div className="card-category-1">
					<div className="basic-card">
						<div className="card-content">
							<p className="card-text">Likes</p>
							<span className="card-title">507</span>
							<p className="card-text">
								<img src={Down}></img>303%
							</p>
							<p className="card-text">553%</p>
							<img src={Twitter} alt="" />
						</div>
					</div>
				</div>
				<div className="card-category-1">
					<div className="basic-card">
						<div className="card-content">
							<p className="card-text">Likes</p>
							<span className="card-title">107</span>
							<p className="card-text">
								<img src={Down}></img>303%
							</p>
							<p className="card-text">19%</p>
							<img src={Youtube} alt="youtube icon" />
						</div>
					</div>
				</div>
				<div className="card-category-1">
					<div className="basic-card">
						<div className="card-content">
							<p className="card-text">Total Views</p>
							<span className="card-title">1407</span>
							<p className="card-text">
								<img src={Down}></img>12%
							</p>
							<img src={Youtube} alt="youtube icon" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Dashboard;
