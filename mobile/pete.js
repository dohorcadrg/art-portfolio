$('.headcarol').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.navslider'
  });

      $('.navslider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        asNavFor: '.headcarol',
        centerMode: true,
        infinite: true,
        dots:true,
        slidesToShow: 5,
        slidesToScroll: 5,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
  ]
      });