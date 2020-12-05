class UserService{

	static headers = {
		"Content-Type": "application/json",
		"Accept": "application/json",
		"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2MjI2ZjdkMjAwMjA0MTE0YzQiLCJpYXQiOjE2MDcxODM3MTR9.wLlxyZRRYe2RIDzq0JhfEg-hMwNcF8NHJAtx8CV7vrw"
	}

	static async getUserInfo(){

		const headers = {headers: this.headers}

		const resp = await fetch(`https://coding-challenge-api.aerolab.co/user/me`, headers)
		const data = await resp.json();
		console.log(data);
		return data;
	}

}

export default UserService;