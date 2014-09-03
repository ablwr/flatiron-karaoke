document.addEventListener("DOMContentLoaded", function () {

  $(function () {
    $('#footnotediv div')
    .textillate( { 
      in: { shuffle: false, effect: 'fadeInLeft', sync: true },
      out: { shuffle: false, effect: 'fadeOutRight', sync: true }
    });
})

});

