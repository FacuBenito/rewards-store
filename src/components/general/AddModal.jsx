import React, {useContext} from "react";
import coin from "../../assets/icons/coin.svg";
import UserService from "../../services/UserService";
import {UserContext} from "../../context/UserContext";

const AddModal = ({showModal}) =>{

	const {setUser} = useContext(UserContext);

	const handleAdd = async (e) => {
		const amount = e.target.id;
		const resp = await UserService.addCoins(amount);

		if(resp !== false){
			const newUser = UserService.getUserInfo();
			setUser(newUser);
		}

		alert(resp.message + ". You've added " + resp['new Points'] + " coins");
	}

	return(
		<div className={`modal-ctn`} id="modal-ctn">
			<div className="add-modal" >
				<h1 className="add-title">Add more coins! <p className="emoji">&#129297;</p></h1>
				
				<div className="close-ctn" onClick={showModal}>
					<i className="fas fa-times"></i>
				</div>

				<div className="add-btn" name="1000" onClick={handleAdd}>
					<img src={coin} alt="coin" className="coin"/>
					<h3 className="amount">1000</h3>
				</div>
				<div className="add-btn" name="5000" onClick={handleAdd}>
					<img src={coin} alt="coin" className="coin"/>
					<h3 className="amount">5000</h3>
				</div>
				<div className="add-btn" name="7500" onClick={handleAdd}>
					<img src={coin} alt="coin" className="coin"/>
					<h3 className="amount">7500</h3>
				</div>
			</div>
		</div>
	)
}

export default AddModal;
