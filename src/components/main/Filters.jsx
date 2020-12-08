import React, {useContext} from "react";
import right from "../../assets/icons/arrow-right.svg";
import left from "../../assets/icons/arrow-left.svg";
import { ProductContext } from "../../context/ProductContext";

const Filters = ({handleSort, sort, handlePage, page, isFooter}) => {

	// eslint-disable-next-line no-unused-vars
	const {products, setProducts} = useContext(ProductContext);
	const prodLen = products.length;
	const prodsOnPage = Math.min(16*page, prodLen);

	return(
		<div className={`filters-ctn ${isFooter ? "footer" : ""}`}>
			<span className="product-index">{prodsOnPage} of {prodLen} products</span>
			<div className={`filters ${isFooter ? "hidden" : ""}`}>
				<span className={`sort-title`}>Sort by: </span>
				<button className={`filter ${sort === "0" ? "selected" : ""}`} onClick={handleSort} name="0">Most Recent</button>
				<button className={`filter ${sort === "1" ? "selected" : ""}`} onClick={handleSort} name="1">Lowest Price</button>
				<button className={`filter ${sort === "2" ? "selected" : ""}`} onClick={handleSort} name="2">Highest Price</button>
			</div>
			<div className="arrows">
				<img src={left} alt="left-arrow" className={`left ${page === 1 ? "hidden" : ""}`} onClick={handlePage} name="-1"/>
				<img src={right} alt="right-arrow" className={`right ${prodsOnPage >= prodLen ? "hidden" : ""}`} onClick={handlePage} name="1"/>
			</div>
		</div>
	)
}

export default Filters;
