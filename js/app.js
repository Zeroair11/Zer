$(document).ready(function () {
  $(".cardslider").slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'>&#8672;</i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'>&#8674;</i></button>",
    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          infinite: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
