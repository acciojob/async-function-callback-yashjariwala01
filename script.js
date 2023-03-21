const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
async function fetchData(callback){
	const response = await fetch(url);
	const data = await response.json();
	callback(data);
}
function msg(data){
	document.getElementById("output").innerText = data.title;
}
