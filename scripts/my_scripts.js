
$(function (){
    const deg = 6;
    const horArrow = document.querySelector("#h-arrow");
    const minArrow = document.querySelector("#m-arrow");
    const secArrow = document.querySelector("#s-arrow");

    setInterval(() => {
        let time = new Date();
        let h = time.getHours();
        let m = time.getMinutes();
        let s = time.getSeconds();

        let hDgree = h * 30;
        let mDgree = m * deg;
        let sDgree = s * deg;

        horArrow.style.transform = `rotateZ(${hDgree + mDgree / 12}deg)`;
        minArrow.style.transform = `rotateZ(${mDgree}deg)`;
        secArrow.style.transform =`rotateZ(${sDgree}deg)`;
        showTime(h, m, s);
    });
    $('.show').click(function () {
        const processor = $('#processor');
        processor.css('display', 'inline-block');
        setTimeout(() => {
            processor.addClass('show');
        }, 100);
    });

    $('.fa-times').click(function () {
        const processor = $('#processor');
        processor.removeClass('show');
        setTimeout(() => {
            processor.css('display', 'none');
        }, 100);
    });

    $('ul#filters a').click(function (){
        let className=$(this).attr('class');
        console.log(className)
        if(className==='all'){
            $('.work-sample').fadeIn(500)
        }
        else{
            $('.work-sample').hide().filter('.'+className).fadeIn(500)
        }

        $('a.active').removeClass('active')
        $(this).addClass('active')

        return false
    })
    $('.acc-title').click(function (){
        $('.acc-title').find('i').removeClass('fa-xmark')
        if($(this).next().is(':hidden')){
            $(this).children('i').addClass('fa-xmark')
        }
        else {
            $(this).children('i').removeClass('fa-xmark')
        }
        $(this).next().slideToggle(200).siblings('.acc-content').slideUp(200)
    })
    $('.bxslider').bxSlider({
        mode:'vertical',
        speed:500,
        infiniteLoop: true,
        hideControlOnEnd: true,
        // pager:false,
        nextSelector: '#slideNext',
        prevSelector: '#slidePrev',
        nextText: '<i class="fa-solid fa-angle-left"></i>',
        prevText: '<i class="fa-solid fa-angle-right"></i>',
        auto: true,
        pause:2000,
        captions:true
    });
    $('#team-wrapper').slick({
        rtl: true,
        slidesToShow: 4,
        dots: true,
        infinite: false,
        slidesToScroll:4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false,
                }
            }
        ]

 });
    $('#comment-wrapper').slick({
        rtl: true,
        slidesToShow:2,
        dots : true,
        slidesToScroll : 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false,

                }
            }
        ]

    });
    AOS.init();
    // $('#comments').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 2,
    //     adaptiveHeight: true
    // });


})