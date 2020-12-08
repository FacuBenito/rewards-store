import React from "react";
import right from "../../assets/icons/arrow-right.svg";
import left from "../../assets/icons/arrow-left.svg";

const Filters = ({handleSort, sort, handlePage, page, isFooter}) => {

	return(
		<div className={`filters-ctn ${isFooter ? "footer" : ""}`}>
			<span className="product-index">{page*16} of 32 products</span>
			<div className={`filters ${isFooter ? "hidden" : ""}`}>
				<span className={`sort-title`}>Sort by: </span>
				<button className={`filter ${sort === "0" ? "selected" : ""}`} onClick={handleSort} name="0">Most Recent</button>
				<button className={`filter ${sort === "1" ? "selected" : ""}`} onClick={handleSort} name="1">Lowest Price</button>
				<button className={`filter ${sort === "2" ? "selected" : ""}`} onClick={handleSort} name="2">Highest Price</button>
			</div>
			<div className="arrows">
				<img src={left} alt="left-arrow" className={`left ${page === 1 ? "hidden" : ""}`} onClick={handlePage} name="-1"/>
				<img src={right} alt="right-arrow" className={`right ${page*16 > 31 ? "hidden" : ""}`} onClick={handlePage} name="1"/>
			</div>
		</div>
	)
}

export default Filters;
