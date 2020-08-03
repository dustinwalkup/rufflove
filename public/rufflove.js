console.log("connected");
var form = document.querySelector('form');
form.setAttribute("method", "GET")
form.setAttribute("action", "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php")
form.setAttribute("target", "_blank") 



var button = document.querySelector('#button');

button.addEventListener('click', event => {
   
   form.submit();
   window.open("/myprofile", "_self");
  
   event.preventDefault();

 });


var accordions = document.querySelectorAll(".button-list");

for (var idx = 0; idx < accordions.length; idx++){
	accordions[idx].onclick = function(){
		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show");
	}
} 
