import React, {useContext, useState} from "react";
import right from "../../assets/icons/arrow-right.svg";
import left from "../../assets/icons/arrow-left.svg";
import { ProductContext } from "../../context/ProductContext";

const Filters = ({handleSort, sort, handlePage, page, isFooter}) => {

	const {products, setProducts} = useContext(ProductContext);
	const prodLen = products.length;
	const prodsOnPage = Math.min(16*page, prodLen);

	const [activeFilter, setActiveFilter] = useState(0);

	const filtersParams = [
		{callback: (p1, p2) => {
			const prop = p1.createDate ? "createDate" : "_id";
      return (p1[prop]<p2[prop]) ? -1 : 1;
		}, label: 'Most recent'},
		{callback: (p1, p2) => p1.cost - p2.cost, label: 'Lowest price'},
		{callback: (p1, p2) => p2.cost - p1.cost, label: 'Highest price'},
	];

	const sortProducts = (filterId, sortFunction) => {
		const sortedProducts = products.slice().sort(sortFunction);
		setProducts(sortedProducts);
		setActiveFilter(filterId);
	};

	return(
		<div className={`filters-ctn ${isFooter ? "footer" : ""}`}>
			<span className="product-index">{prodsOnPage} of {prodLen} products</span>
			<div className={`filters ${isFooter ? "hidden" : ""}`}>
				<span className={`sort-title`}>Sort by: </span>
				{filtersParams.map(({callback, label}, i) => (
					<button
						key={i}
						className={`filter ${activeFilter === i ? 'selected' : ''}`}
						onClick={() => sortProducts(i, callback)}
					>
						{label}
					</button>
				))}
			</div>
			<div className="arrows">
				<img src={left} alt="left-arrow" className={`left ${page === 1 ? "hidden" : ""}`} onClick={handlePage} name="-1"/>
				<img src={right} alt="right-arrow" className={`right ${prodsOnPage >= prodLen ? "hidden" : ""}`} onClick={handlePage} name="1"/>
			</div>
		</div>
	)
}

export default Filters;
