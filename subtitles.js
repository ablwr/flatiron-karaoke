document.addEventListener("DOMContentLoaded", function () {

   var example = Popcorn.youtube(
     '#video',
     'https://www.youtube.com/watch?v=i4tTnIimi8E' );

   example.footnote({
     start: 2,
     end: 6,
     text: "Pop!",
     target: "footnotediv"
   });

   example.play();

}, false);