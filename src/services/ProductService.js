class ProductService{
	
	static headers = {
		"Content-Type": "application/json",
		"Accept": "application/json",
		"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2MjI2ZjdkMjAwMjA0MTE0YzQiLCJpYXQiOjE2MDcxODM3MTR9.wLlxyZRRYe2RIDzq0JhfEg-hMwNcF8NHJAtx8CV7vrw"
	}

	static async getProducts(){

		const headers = {
			headers: this.headers
		}

		try{
			const resp = await fetch("https://coding-challenge-api.aerolab.co/products", headers);
			if(resp.status !== 200){
				throw new Error(resp);
			}
			const data = await resp.json();

			return data;

		}catch(e){
			return false;
		}
	}

	static async redeemProduct(productId){

		const params = {
			body: JSON.stringify({productId}),
			method: "post",
			mode: "cors",
			headers: this.headers
		}

		try{
			const resp = await fetch(`https://coding-challenge-api.aerolab.co/redeem`, params);

			if(resp.status !== 200){
				throw new Error(resp);
			}
			const data = await resp.json();

			return data;

		}catch(e){
			return false;
		}

	}

}

export default ProductService;
