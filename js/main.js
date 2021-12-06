$(document).ready(function(){

  
  /* Sticky And Scroll UP */

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $(".header-sticky").removeClass("sticky-bar");
      $('#back-top').fadeOut(500);
    } else {
      $(".header-sticky").addClass("sticky-bar");
      $('#back-top').fadeIn(800);
    }
  });

  /* Scroll Up */

  $('#back-top a').on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  /* Hamburger */

    $('.mobile-menu').click(function (e) {
    e.preventDefault();
    $('.menu').toggle();
  })
  $('.close-menu').click(function (e) {
    e.preventDefault();
    $('.menu').hide();
  })

  /* Modal Window */

  $('.popup-open').click(function () {
    $('.popup-fade').fadeIn();
  });

  $('.popup-fade').click(function (e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();
    }
  });

  $('.close-popup').click(function (e) {
    e.preventDefault();
    $('.popup-fade').hide();
  });
  
  /* Плавная прокрутка к секции */

  $(".btn-down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

  /* Validate */

  $('[data-submit]').on('click', function (e) {
    e.preventDefault();
    $(this).parent('form').submit();
  })
  $.validator.addMethod('regex', function (value, element, regexp) {
    let regExp = new RegExp(regexp);
    return this.optional(element) || regExp.test(value);
  }, 'Пожалуйста, введите ваше имя на русском языке');


  function valEl(el) {
    el.validate({
      rules: {
        tel: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 11,
          regex: "[0-9]+"
        },
        name: {
          required: true,
          regex: "[А-Яа-я]{1,10}"
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        tel: {
          required: 'Поле обязательно для заполнения',
          regex: 'Телефон может содержать символы + - ()'
        },
        name: {
          required: 'Поле обязательно для заполнения',
        },
        email: {
          required: 'Поле обязательно для заполнения',
          email: 'Неверный формат E-mail'
        }
      },
      submitHandler: function (form) {
        let $form = $(form);
        let $formId = $(form).attr('id');
        switch ($formId) {
          case 'form':
            $.ajax({
              type: 'POST',
              url: $form.attr('action'),
              data: $form.serialize()
            })
              .done(function () {
                console.log('Success');
              })
              .fail(function () {
                console.log('Fail');
              })
              .always(function () {
                setTimeout(function () {
                  $form.trigger('reset');
                  $('.popup').fadeOut();
                }, 1000);
                setTimeout(function () {
                  $('.popup-success').fadeIn();
                }, 1000);
                setTimeout(function () {
                  $('.success-message').fadeIn();
                }, 1000);
              });
            break;
        }
        return false;
      }
    })
  };

  $('.js-form').each(function () {
    valEl($(this));
  });
  
  /* Slider */

  $('.slider').slick({
    arrows:false,
    dots:true,
    adaptiveHeight:true,
    speed:1000,
    initialSlide:1,
    autoplay:true,
    autoplaySpeed:2000,
    touchThreshold:10,
    waitForAnimation:false,
    asNavFor:'.slider-two',
  })
    $('.slider-two').slick({
    arrows:false,
    dots:false,
    adaptiveHeight:true,
    speed:1000,
    initialSlide:1,
    autoplay:true,
    autoplaySpeed:2000,
    touchThreshold:10,
    waitForAnimation:false,
    asNavFor:'.slider',
    
 
  })
  $('.slider-team').slick({
    arrows:true,
    dots:true,
    adaptiveHeight:true,
    speed:1000,
    initialSlide:1,
    autoplay:true,
    autoplaySpeed:2000,
    touchThreshold:10,
    waitForAnimation:false,
  });
  

});