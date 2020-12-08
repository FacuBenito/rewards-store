/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from "react";
import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import { UserContext } from "../../context/UserContext";
import { ProductContext } from "../../context/ProductContext";

const HeaderBar = ({showModal}) => {
	
	const {user, setUser} = useContext(UserContext);
	const {products, setProducts} = useContext(ProductContext);
	const [showHistory, setHistoryFlag] = useState(false);
	const [auxProds, setAuxProds] = useState([]);

	const handleHistory = async () => {
		setHistoryFlag(!showHistory);
	}

	useEffect(() => {

		if(products !== user.redeemHistory){
			setAuxProds(products);
		}
		
		setProducts((showHistory ? user.redeemHistory : auxProds));

	},[showHistory]);

	return(
		<div className="header-bar">
			<img className="header-logo" src={logo} alt="logo"/>
			<div className="header-user">
				<span className="header-username">{user && user.name}</span>
				<div className="header-coins" onClick={showModal}>
					<span className="header-coin-count">{user && user.points}</span>
					<img src={coin} alt="coin" className="coin"/>
				</div>
				<span className={`header-username header-btn`} onClick={handleHistory}>{showHistory ? <i className="fas fa-home"></i> : <i className="fas fa-history"></i>}</span>
				<span className={`header-username header-btn`} onClick={showModal}><i class="fas fa-plus-circle"></i></span>
			</div>
		</div>
	)

}

export default HeaderBar
