
// tabs
$('.tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.our-services-text-container').not(':first').hide();
	ths.find('.our-services-list-item').click(function() {
		ths.find('.our-services-list-item').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.our-services-text-container').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});
// load more 
let container = document.getElementById('our-grid-container')
let btn = document.getElementById('btn')
btn.addEventListener('click',function(){
container.classList.remove('hidden')
btn.remove()
})
console.log(container);
// catalog
$(function(){
	let = filter = $('[data-filter');
	filter.on('click',function(event){
		event.preventDefault();
		let cat = $(this).data('filter');
		if (cat == 'all'){
			$('[data-cat]').removeClass('hidden');
		}
		else {
			$('[data-cat').each(function(){
				let workCat = $(this).data('cat')
				if (workCat !== cat){
					$(this).addClass('hidden');
				}
				else {
					$(this).removeClass('hidden')
				}
			})
		}
	})
})
let ourTab = document.querySelector('.our-list')
let  ourTabs = document.querySelectorAll('.our-list-item')
ourTab.addEventListener('click',function(el){
	Array.from(ourTabs).forEach(el => {
	el.classList.remove('active-tab')
});
if (el.target.classList.contains('our-list-item')){
	el.target.classList.add('active-tab')
}
else if (el.target.classList.contains('our-list-url')){
	el.target.parentNode.classList.add('active-tab')
}
})

// slider
$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	focusOnSelect: true,
nextArrow: '.arrow-prev',
prevArrow: '.arrow-next'
  });
 
  