/* =============================== [NAV BAR] ==================================== */

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	burger.addEventListener('click',() => {
		nav.classList.toggle('nav-active');
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			}
			else {
				link.style.animation = `navLinkFade 1s ease forwards ${index / 7}s`;
			}
		});
		burger.classList.toggle('toggle');
	});
}
navSlide();

/* ======================= [SCROLL TO TOP BUTTON] ============================ */

$(window).scroll(function() {
    if($(this).scrollTop() > 1500) {
        $('#btnScrollToTop').fadeIn(400);
    } else { // else
        $('#btnScrollToTop').fadeOut(400);
    }
});

$('#btnScrollToTop').click(function() {
    $('body,html').animate({scrollTop:0},200);
});