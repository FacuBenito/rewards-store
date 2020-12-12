import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";

export const UserContext = React.createContext();

export default function UserContextProvider({children}) {

	const [user, setUser] = useState({name:"", points:""});

	const getUser = async () => {
		const newUser = await UserService.getUserInfo();
		setUser(newUser);
	}

	useEffect(() => {
		getUser();
	}, [])

	useEffect(() => {
		console.log("Me quiero morir 3 veces");
	}, [user])

	return(
		<UserContext.Provider value={{user, setUser}}>
			{children}
		</UserContext.Provider>
	)
}
