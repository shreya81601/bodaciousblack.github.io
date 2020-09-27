// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById("myImg");*/
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

/*document.getElementById("myImg").onclick = */

function display()
{
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

document.getElementById("myImg1").addEventListener('click', display);
document.getElementById("myImg2").addEventListener('click', display);
document.getElementById("myImg3").addEventListener('click', display);
document.getElementById("myImg4").addEventListener('click', display);
document.getElementById("myImg5").addEventListener('click', display);
document.getElementById("myImg6").addEventListener('click', display);
document.getElementById("myImg7").addEventListener('click', display);
document.getElementById("myImg8").addEventListener('click', display);
document.getElementById("myImg9").addEventListener('click', display);

/*document.getElementById("myImg2").onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}*/


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}