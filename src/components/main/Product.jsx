import React from "react";
import HoverFilter from "./HoverFilter";
import bag from "../../assets/icons/buy-blue.svg";

const ProductCard = (props) => {
	const {category, cost, img, name, _id} = props;
	return(
		<div className="product-card" id={_id}>
			<img src={bag} alt="buy-bag" className="buy-bag"/>
			<img src={img.url} alt={`${name}-product`} className="product-img"/>
			<div className="product-info">
				<h4 className="category">{category}</h4>
				<h3 className="product-name">{name}</h3>
			</div>
			<HoverFilter cost={cost}/>
		</div>
	)

}

export default ProductCard;