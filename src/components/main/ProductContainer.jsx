import React, { useState, useEffect } from "react";
import ProductService from "../../services/ProductService";
import Product from "../main/Product";

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
			return (<Product {...product} key={index} />)
		})}
	</div>
	)
}

export default ProductContainer;
