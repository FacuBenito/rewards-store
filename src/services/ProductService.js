class ProductService{
	
	static headers = {
		"Content-Type": "application/json",
		"Accept": "application/json",
		"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
	}

	static async getProducts(){

		const headers = {
			headers: this.headers
		}

		try{
			const resp = await fetch("https://coding-challenge-api.aerolab.co/products", headers)
			const data = await resp.json();

			return data;

		}catch(e){
			return false;
		}
	}

	static async redeemProduct(productID){
		
		const headers = {
			headers: this.headers
		}

		const body = {
			productid: {productID},
			method: "post",
			mode: "cors",
			headers: headers
		}
		
		try{
			const resp = await fetch(`https://private-2f5cb-aerolabchallenge.apiary-mock.com/redeem`, body)
			const data = await resp.json();

			return data;

		}catch(e){
			return false;
		}

	}

}

export default ProductService;
