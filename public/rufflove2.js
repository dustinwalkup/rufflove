console.log("connected 2");
var accordions = document.querySelectorAll(".button-list");

for (var idx = 0; idx < accordions.length; idx++){
	accordions[idx].onclick = function(){
		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show");
	}
} 
