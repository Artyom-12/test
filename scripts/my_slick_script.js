$(document).ready(function(){
	const $slider = $('.main-offers__items');


	$slider.slick({
		// dots: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		waitForAnimate: false,
	});


	// $slider.on('afterChange', function(event, slick, currentSlide){
    // // Если достигли последнего слайда — вернуться в начало
    // if (currentSlide + slick.options.slidesToShow >= slick.slideCount) {
    //   setTimeout(() => {
    //     $slider.slick('slickGoTo', 0);
    //   }, 50); // немного подождать перед возвратом
    // }
  	// });
});



// $(document).ready(function(){
//   debugger;
//   let $slider = $('.main-offers__items');
//   let slideCount = $slider.children().length;
//   console.log($slider);
//   console.log(slideCount);
//   // Клонируем элементы вручную, если их ровно столько же, сколько slidesToShow
//   if (slideCount === 5) {
//     $slider.append($slider.html()); // Дублируем слайды
//   }

//   $slider.slick({
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: false
//     // dots: true,
//     // waitForAnimate: false,
//   });
// });