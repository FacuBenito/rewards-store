import React from "react";
import coin from "../../assets/icons/coin.svg";

const HoverFilter = ({cost}) => {
	return(
		<div className="hover-filter">
			<div className="cost-ctn">
				<h3 className="product-cost">{cost}</h3>
				<img src={coin} alt="coin" className="hover-coin"/>
			</div>
			<button className="redeem-btn">Redeem now</button>
		</div>
	)
}

export default HoverFilter;