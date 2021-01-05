/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../../context/ProductContext";

const ProductContainer = ({sort, page}) => {

	const {products, setProducts} = useContext(ProductContext);

	useEffect(() => {
			const sortedProducts = products.slice().sort((a, b) => {
	
				switch (sort){
					case "lowestPrice":
						return a.cost - b.cost;
					case "highestPrice": 
						return b.cost - a.cost;
					case "mostRecent":
						return (a._id < b._id) ? -1 : 1;
					default:
						return 0;
				}
	
			});
		setProducts(sortedProducts);
	}, 
	[sort]); //ESLINT sugiere poner products acá también, pero se genera recursividad infinita :c
	
	return(
		<div className="product-container">{products && products.map((product, index) => {

			const limit = page*16;
			const offSet = limit-16;

			if(index >= offSet && index < limit){
				return (
					<ProductCard {...product} key={`${product._id}-${index}`}/>
					)
				}else{
					return null;
				}
			})}
		</div>
	)
}

export default ProductContainer;
