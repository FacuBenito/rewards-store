import React, { useState, useEffect } from "react";
import ProductService from "../../services/ProductService";
import ProductCard from "./ProductCard";
import UserContextProvider from "../../context/UserContext";

const ProductContainer = ({sort}) => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts();
	},[]);

	const fetchProducts = async () => {
		const products = await ProductService.getProducts();
		setProducts(products);
	}

	useEffect(() => {
		console.log(sort);
		const sorted = products.slice().sort((a, b) => {

			switch (sort){
				case "1":
					return a.cost - b.cost;
				case "2": 
					return b.cost - a.cost;
				case "0":
					return (a._id < b._id) ? -1 : 1;
				default:
					return 0;
			}

		});
		setProducts(sorted);
	}, 
	[sort]);

	return(
		<div className="product-container">{products && products.map((product, index) => {
			return (
				<UserContextProvider key={index}>
					<ProductCard {...product}/>
				</UserContextProvider>
			)
		})}
	</div>
	)
}

export default ProductContainer;
