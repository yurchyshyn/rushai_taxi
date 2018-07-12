 var form = document.querySelector("form");
	form.addEventListener("submit", function() {
		notification.style.opacity = "1";
		setTimeout(function(){
	  	notification.style.opacity = "0";
		}, 3000);	
	});