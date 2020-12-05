import React, { useContext, useState } from "react";

export const userContext = React.createContext();

export default function userContextProvider() {

	const [user, setUser] = useState({name:"", points:""});
}
