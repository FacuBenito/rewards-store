import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";

export const UserContext = React.createContext();

export default function UserContextProvider({children}) {

	const [user, setUser] = useState({name:"", points:""});

	const getUser = async () => {
		const newUser = await UserService.getUserInfo();
		console.log(newUser);
		setUser(newUser);
	}

	useEffect(() => {
		getUser();
	}, [])

	return(
		<UserContext.Provider value={{user}}>
			{children}
		</UserContext.Provider>
	)
}
