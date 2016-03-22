var iName = $("#name");
var iEmail = $("#email");
var iWebSite = $("#website");
var iMessage = $("#message");
var sButton = $("#submitBtn");
var form = $("form");  

form.on("submit", function(e){     
	e.preventDefault();     
	     

	    if (iName.val() === ""){
			$( "#nameError" )
  			.html( "<p>Name cannot be left empty</p>" );
		 }  if (iEmail.val().includes('@') === false){
		  	$( "#emailError" )
  	 		.html( "<p>Email must contain an @ symbol</p>" );         
		  }  if (iWebSite.val().includes("http://") === false){
		  	$( "#webError" )
  	 		.html( "<p>Website must start with http://</p>" );
         }  if (iMessage.val() === ""){
			 $( "#messageError" )
  			.html( "<p>Message cannot be left empty</p>" );
      	 } else {
			$(".inputBox").css("display", "none");
			$(".finalDisplay").css("display", "block");
			$(".finalDisplay").html
			("<div>Thanks for contacting us " +iName.val()+ ".  We have received your message and will be in touch shortly.</div>");         
		 }
});

$("#submitBtn").mouseover(function(){
	$("#submitBtn").css("background", "#88C470");
});

