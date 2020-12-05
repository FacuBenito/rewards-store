import React from "react";

const Filters = ({handleSort, sort}) => {
	return(
		<div className="filters-ctn">
			<span className="product-index">16 of 32 products</span>
			<div className="filters">
				<span className="sort-title">Sort by: </span>
				<button className={`filter ${sort === "0" ? "selected" : ""}`} onClick={handleSort} name="0">Most Recent</button>
				<button className={`filter ${sort === "1" ? "selected" : ""}`} onClick={handleSort} name="1">Lowest Price</button>
				<button className={`filter ${sort === "2" ? "selected" : ""}`} onClick={handleSort} name="2">Highest Price</button>
			</div>
		</div>
	)
}

export default Filters;
