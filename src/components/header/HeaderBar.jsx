import React from "react";
import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";

const HeaderBar = () => {

	return(
		<div className="header-bar">
			<img className="header-logo" src={logo} alt="logo"/>
			<div className="header-user">
				<span className="header-username">Username</span>
				<div className="header-coins">
					<span className="header-coin-count">6000</span>
					<img src={coin} alt="coin" className="coin"/>
				</div>
			</div>
		</div>
	)

}

export default HeaderBar
