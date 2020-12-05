import React, {useState} from "react";
import Filter from "./Filters";
import ProductContainer from "./ProductContainer";

const Main = () => {
	const [sort, setSort] = useState("0")
	
	const handleSort = (e) => {
		setSort(e.target.name)
	}

	return(
		<div className="main">
			<Filter handleSort={handleSort} sort={sort}/>
			<ProductContainer sort={sort}/>
		</div>
	)
}

export default Main;
