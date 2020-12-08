import React, { useState } from "react";
import HeaderImg from "./HeaderImg";
import HeaderBar from "./HeaderBar";
import UserContextProvider from "../../context/UserContext";
import ProductContextProvider from "../../context/ProductContext"
import AddModal from "../general/AddModal";

const Header = () => {
	const [shown, setShown] = useState(false);

	const showModal = () => {
		setShown(!shown);
	}

	return(
		<div className="header">
			<UserContextProvider>
				<HeaderBar showModal={showModal}/>
				<AddModal shown={shown} showModal={showModal}/>
			</UserContextProvider>
			
			<HeaderImg/>

		</div>
	)

}

export default Header;