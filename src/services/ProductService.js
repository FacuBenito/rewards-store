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

		const resp = await fetch("https://coding-challenge-api.aerolab.co/products", headers)
		const data = await resp.json();
		
		return data;
	}

}

export default ProductService;
