import React, { useState, useContext } from "react";
import HeaderImg from "./HeaderImg";
import HeaderBar from "./HeaderBar";
import AddModal from "../general/AddModal";

const Header = () => {
	const [shown, setShown] = useState(false);

	const showModal = () => {
		setShown(!shown);
	}

	return(
		<header className="header">
			<HeaderBar showModal={showModal}/>
			{
				shown ? 
				<AddModal showModal={showModal}/>
				:
				null
			}
			<HeaderImg/>
		</header>
	)

}

export default Header;