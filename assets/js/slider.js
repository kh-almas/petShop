$(document).ready(function(){

    //index
    $("#slider").slick({
        // normal options...
        infinite: true,
        dots: true,
        autoplay:true,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        arrows: false,
        centerMode: false,
        variableWidth: false,


        // the magic
        responsive: [{

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });

    //single product
    $("#single_product_slider").slick({
        // normal options...
        infinite: true,
        dots: true,
        autoplay:true,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        arrows: false,
        centerMode: false,
        variableWidth: false,


        // the magic
        responsive: [{

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });



    // sliderexample

    $("#sliderexample").slick({
        // normal options...
        slidesToShow: 1,


        // the magic
        responsive: [{

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });


    $('#external-buttons a').on('click', function(e){
        e.preventDefault();
        $('#external-buttons a.active').removeClass('active');
        $(this).addClass('active');
        var targetSlide = $(this).data('target');
        $('.slick-slider').slick('slickGoTo', targetSlide );
    });//click()











    //dog-training
    $("#paket_training_slider").slick({
        // normal options...
        infinite: true,
        dots: true,
        autoplay:true,
        pauseOnHover:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: false,
        variableWidth: false,


        // the magic
        responsive: [{

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });

    //pet grooming
    $("#comment_review_slider").slick({
        // normal options...
        infinite: true,
        dots: true,
        autoplay:true,
        pauseOnHover:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: false,
        variableWidth: false,


        // the magic
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });

    //pet grooming
    $("#video_review_slider").slick({
        // normal options...
        infinite: true,
        dots: true,
        autoplay:true,
        pauseOnHover:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: false,
        variableWidth: false,


        // the magic
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });

    //shop
    $("#shop_slider").slick({
        // normal options...
        infinite: true,
        dots: false,
        autoplay:true,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: false,
        variableWidth: false,


        // the magic
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });

    //single_product
    $("#same_product_slider").slick({
        // normal options...
        infinite: true,
        dots: true,
        autoplay:true,
        pauseOnHover:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: false,
        variableWidth: false,


        // the magic
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });


    $("#same_shop_slider").slick({
        // normal options...
        infinite: true,
        dots: true,
        autoplay:true,
        pauseOnHover:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: false,
        variableWidth: false,


        // the magic
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });

});