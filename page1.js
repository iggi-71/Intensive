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

document.getElementById("name1").onclick = function(){
	var name1 = prompt("Enter the name of PERSON you are BORROWING from");
  document.getElementById("outputName1").innerText = name1;
}

document.getElementById("desc1").onclick = function(){
  var desc1 = prompt("Enter Description of Transaction");
  document.getElementById("outputDesc1").innerText = desc1;
}

document.getElementById("cash1").onclick = function(){
  var cash1 = prompt("Enter amount");
  document.getElementById("outputCash1").innerText = cash1;
}