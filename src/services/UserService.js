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
				throw new Error("Error");
			}
			const data = await resp.json();
			return data;

		}catch(e){
			return false;
		}
	}

	static async addCoins(amount){
		const headers = {headers: this.headers}

		const body = {
			productid: {amount},
			method: "post",
			mode: "cors",
			headers: headers
		}

		try{
			const resp = await fetch(`https://private-2f5cb-aerolabchallenge.apiary-mock.com/user/points`, body);
			if(resp.status !== 200){
				throw new Error("Error");
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
			const resp = await fetch(`https://private-2f5cb-aerolabchallenge.apiary-mock.com/user/history`, headers);

			if(resp.status !== 200){
				throw new Error("Error");
			}
			const data = await resp.json();
			console.log(data);
			return data;
		}catch(e){
			console.log(e);
			return false;
		}
	}

}

export default UserService;