import React, { useState, useEffect } from "react";
import ProductService from "../../services/ProductService";
import ProductCard from "./ProductCard";
import UserContextProvider from "../../context/UserContext";

const ProductContainer = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts();
	},[]);

	const fetchProducts = async () => {
		const products = await ProductService.getProducts();
		setProducts(products);
	}

	return(
		<div className="product-container">{products && products.map((product, index) => {
			return (
				<UserContextProvider>
					<ProductCard {...product} key={index} />
				</UserContextProvider>
			)
		})}
	</div>
	)
}

export default ProductContainer;
