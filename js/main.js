const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '59e79a01a9msh50f99855ab73a88p1b6f61jsnad84cb6454b1',
		'x-rapidapi-host': 'quotes15.p.rapidapi.com'
	}
};
.then(response => response.json())
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}