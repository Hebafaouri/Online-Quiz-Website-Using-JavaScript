 // Automatic Slideshow - change image every 3 seconds
 var myIndex = 0;
 carousel();
 
 function carousel() {
   var i;
   var x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
   }
   myIndex++;
   if (myIndex > x.length) {myIndex = 1}
   x[myIndex-1].style.display = "block";
   setTimeout(carousel, 3000);
 }
 function functionlogin(){
  window.location.href ="../Heba Faouri/index.html"
 }

 var button = document.getElementById("loginbtn");
 var openForm = function(button) {
	window.location.href = "../Heba Faouri/index.html";
};
 var userData = sessionStorage.getItem("userData")
if (userData){
 var userName = sessionStorage.getItem("userData")
 var userTitle = document.getElementById('title')
 userTitle.innerHTML=  'Welcome' + ' '+ userName
}