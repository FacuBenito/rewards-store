import React from "react";
import headerImg from "../../assets/header-x1.png";

const HeaderImg = () => {
	
	return(
		<div className="header-img-ctn">
			<h1 className="header-title">Electronics</h1>
			<img className="header-img" src={headerImg} alt="electronics-img"/>
		</div>
	)
}

export default HeaderImg;