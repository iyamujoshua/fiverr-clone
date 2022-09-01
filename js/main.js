$(document).ready(function () {




    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });




    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })



    let nav_offset_top = $('.header_area').height() + 20;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll = nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                    
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

    // window.addEventListener("scroll",function(){
    //   var header = document.queryselector("header_area");
    //   header.classlist.toggle("sticky",window.scrollY > 0);
    // };










  });
jQuery("#carousel").owlCarousel({
    autoplay: false,
    rewind: false,
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    // autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });




  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      items: 1,
      nav:true,
      singleItem: true,
      itemsScaleUp : true,
      slideSpeed: 500,
      autoPlay: 5000,
    
    });
  });




  
  window.addEventListener('scroll', function() {
    let header = document.getElementById('headerArea');
    let scollPosition = window.scrollY > 0;

    header.classList.toggle('headerScroll', scollPosition); 
  });

 
 
 
 
