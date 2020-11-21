import React from "react";
import Filter from "./Filters";
import ProductContainer from "./ProductContainer";

const Main = () => {
	return(
		<div className="main">
			<Filter />
			<ProductContainer />
		</div>
	)
}

export default Main;
