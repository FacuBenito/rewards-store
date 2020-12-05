import React from "react";
import HeaderImg from "./HeaderImg";
import HeaderBar from "./HeaderBar";
import UserContextProvider from "../../context/UserContext";

const Header = () => {

	return(
		<div className="header">
			<UserContextProvider>
				<HeaderBar/>
			</UserContextProvider>
			
			<HeaderImg/>

		</div>
	)

}

export default Header;