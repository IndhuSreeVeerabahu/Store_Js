var enterButton = document.getElementById("enter");
//if we click add it should call add function 
var input = document.getElementById("itemadd");
//stores the item we enter
var ul = document.querySelector("ul");
//update the firstly added items in the order from the first to last
var item = document.getElementsByTagName("li");
//list creation
function inputLength(){
	return input.value.length;
} 
///return length that we added in the button like rice

function listLength(){
	return item.length;
}
//
function createListElement() {
	var li = document.createElement("li"); 
 //create list
  li.appendChild(document.createTextNode(input.value)); 
  //add item entered to list
  //add string input as node
	ul.appendChild(li); 
  //storing items added to ul
	input.value = ""; 
  //making it empty inorder add the next one
  var dBtn = document.createElement("button");
  //to create delete button symbol
	dBtn.appendChild(document.createTextNode("X"));
	//display it as cross mark"X"
	li.appendChild(dBtn);
	//
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON
  
  dBtn.style.align= right;


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}

}


function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

enterButton.addEventListener("click",addListAfterClick);

