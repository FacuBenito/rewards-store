import React, { useState } from "react";
import HeaderImg from "./HeaderImg";
import HeaderBar from "./HeaderBar";
import UserContextProvider from "../../context/UserContext";
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
				<HeaderImg/>
			</UserContextProvider>
			

		</div>
	)

}

export default Header;