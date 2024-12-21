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


$('.birthdaycarol').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
      });

