class UserService{

	static headers = {
		"Content-Type": "application/json",
		"Accept": "application/json",
		"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2MjI2ZjdkMjAwMjA0MTE0YzQiLCJpYXQiOjE2MDcxODM3MTR9.wLlxyZRRYe2RIDzq0JhfEg-hMwNcF8NHJAtx8CV7vrw"
	}

	static async getUserInfo(){

		const headers = {headers: this.headers}

		try{
			const resp = await fetch(`https://coding-challenge-api.aerolab.co/user/me`, headers);

			if(resp.status !== 200){
				throw new Error(resp);
			}

			console.count("shalalalala");
			const data = await resp.json();
			return data;

		}catch(e){
			return false;
		}
	}

	static async addCoins(amount){

		const params = {
			body: JSON.stringify({amount: amount,}),
			method: "post",
			mode: "cors",
			headers: this.headers
		}

		try{
			const resp = await fetch(`https://coding-challenge-api.aerolab.co/user/points`, params);

			if(resp.status !== 200){
				throw new Error(resp);
			}

			const data = await resp.json();
			return data;

		}catch(e){
			return false;
		}
	}

	static async getRedeemHistory(){

		const headers = {headers: this.headers}

		try{
			const resp = await fetch(`https://coding-challenge-api.aerolab.co/user/history`, headers);

			if(resp.status !== 200){
				throw new Error("Error");
			}
			const data = await resp.json();
			return data;
		}catch(e){
			return false;
		}
	}

}

export default UserService;