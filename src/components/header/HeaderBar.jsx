import React, {useState, useEffect} from "react";
import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import UserService from "../../services/UserService";

const HeaderBar = () => {

	const [user, setUser] = useState({})

	const getUser = async () => {
		const newUser = await UserService.getUserInfo();
		setUser(newUser);
	}

	useEffect(() => {
		getUser();
	}, [])

	return(
		<div className="header-bar">
			<img className="header-logo" src={logo} alt="logo"/>
			<div className="header-user">
				<span className="header-username">{user && user.name}</span>
				<div className="header-coins">
					<span className="header-coin-count">{user && user.points}</span>
					<img src={coin} alt="coin" className="coin"/>
				</div>
			</div>
		</div>
	)

}

export default HeaderBar
