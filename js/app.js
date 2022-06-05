new WOW().init();
$(".pricing-slide").slick({
  arrows:false,
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
      {
          breakpoint: 1400,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 400,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});
let screenHeight = $(window).height();

$(window).scroll(function () {
        let currentPosition = $(this).scrollTop();
        if(currentPosition > screenHeight-100){
            $(".side-nav").addClass("side-nav-scroll");
        }else{
            $(".side-nav").removeClass("side-nav-scroll");
            setActive("home");
        }
});

$(".navbar-toggler").click(function () {
    $('#menu-icon').toggleClass('fa-bars').toggleClass('fa-close');
});


function setActive(current) { 
    $('.nav-link').removeClass('current-section');
    $(`.nav-link[href='#${current}']`).addClass('current-section');
}

function navScroll() {

    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {

        if(direction == "down"){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId);
        }

    },{ offset:'50px' });

    currentSection.waypoint(function (direction) {

        if(direction == "up"){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId);
        }

    },{ offset:'-50px' })};
navScroll();
$(window).on('load',function(){
    $('.loader-container').fadeOut(500,function(){
        $(this).remove();
    });
})