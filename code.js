function insert(x)
{
	let y = document.getElementById('result').innerHTML;
	document.getElementById('result').innerHTML = y + x;
}
function C()
{
	document.getElementById('result').innerHTML = "";
}
function result()
{
	let result = document.getElementById('result').innerHTML;
	if(result)
	 {
	 	document.getElementById('result').innerHTML = eval(result);
	 }
	 else
	 {
	 	document.getElementById('result').innerHTML = "error";
	 }
}