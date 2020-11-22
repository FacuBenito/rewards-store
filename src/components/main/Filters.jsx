import React from "react";

const Filters = () => {
	return(
		<div className="filters-ctn">
			<span className="product-index">16 of 32 products</span>
			<div className="filters">
				<span className="sort-title">Sort by: </span>
				<button className="filter">Most Recent</button>
				<button className="filter">Lowest Price</button>
				<button className="filter">Highest Price</button>
			</div>
		</div>
	)
}

export default Filters;
