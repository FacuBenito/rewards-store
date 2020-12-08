/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import HoverFilter from "./HoverFilter";
import bag from "../../assets/icons/buy-blue.svg";
import coin from "../../assets/icons/coin.svg";
import {UserContext} from "../../context/UserContext"

const ProductCard = (props) => {
	const {category, cost, img, name, _id} = props;
	const {user, setUser} = useContext(UserContext)
	
	return(
			<div className="product-card" id={_id}>
				{
					user.points > cost ?
					<img src={bag} alt="buy-bag" className="buy-bag"/>
					:
					<div className="buy-bag product-more-coins">
						<h3 className="more-coins">{`You need ${cost-user.points}`}</h3>
						<img src={coin} alt="coin" className="coin"/>
					</div>
				}
				<img src={img.hdUrl} alt={`${name}-product`} className="product-img"/>
				<div className="product-info">
					<h4 className="category">{category}</h4>
					<h3 className="product-name">{name}</h3>
				</div>
				{
					user.points > cost ? 
					<HoverFilter cost={cost}/>
					:
					null
				}
			</div>
	)

}

export default ProductCard;