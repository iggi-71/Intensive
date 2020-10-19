document.getElementById("name").onclick = function(){
	var name = prompt("Enter the name of PERSON you are BORROWING from");
  document.getElementById("outputName").innerText = name;
}

document.getElementById("desc").onclick = function(){
  var desc = prompt("Enter Description of Transaction");
  document.getElementById("outputDesc").innerText = desc;
}

document.getElementById("cash").onclick = function(){
  var cash = prompt("Enter amount");
  document.getElementById("outputCash").innerText = cash;
}