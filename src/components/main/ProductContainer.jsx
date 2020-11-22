import React, { useState, useEffect } from "react";
import ProductService from "../../services/ProductService";

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
			return (<span key={index}>{product.name} - </span>)
		})}
	</div>
	)
}

export default ProductContainer;
