
var form = document.querySelector('form');
form.setAttribute("method", "GET")
form.setAttribute("action", "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php")
form.setAttribute("target", "_blank") 



var button = document.querySelector('#button');

button.addEventListener('click', event => {
   
   form.submit();
   window.open("profile.html", "_self");
  
   event.preventDefault();

 });