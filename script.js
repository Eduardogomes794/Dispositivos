//Sempre que mexer no Scroll ele "recarrega"
window.sr = ScrollReveal({ reset: true});

//Faz o texto aparecer com efeito
sr.reveal('.titulo1, .titulo2, .titulo3', {
    rotate: {x: 0, y: 80, z: 0},
    duration: 2000
});

//sr.reveal('', { duration: 2000 });

$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
  