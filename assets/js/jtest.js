$(document).ready(function() {

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


  });
  var array = ["EDM" , "Rap" , "Country" , "Hip Hop" , "Electronic" , "Pop" , "R&B" , "Music" , "Techno" , "Deep House" , "Popular Music"];

  var randomAnswer = array[Math.floor(Math.random() * array.length)];

  console.log("and the best music is: " + randomAnswer);


  function goBack() {
    window.history.back()
  }

  window.addEventListener("keydown", event => {
    if (event.key == "v") {
      document.body.style.background = "white";
    }
  });
  window.addEventListener("keyup", event => {
    if (event.key == "v") {
      document.body.style.background = "";
    }
  });
