
let nav = document.querySelector('.nav-menu__item');
let burger = document.querySelector(".header__burger").addEventListener("click",function(e){
  let hasClass = event.target.classList.contains('active');
  if (hasClass) {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

	
document.addEventListener('DOMContentLoaded', () => { 
	document.querySelector('.header__burger').addEventListener("click", function() {
		document.querySelector('.header__burger').classList.toggle('active');

	})
	


	const approach = document.querySelector('.approach');
	const nav = document.querySelector('.nav-menu');
 	const scrollItems = document.querySelectorAll('.scroll-item');

 	const scrollAnimation = () => {
 		let windowCenter = (window.innerHeight) + window.scrollY;
 		scrollItems.forEach(el => {
 			let scrollOffset = el.offsetTop + (el.offsetHeight) / 2;
 			if (windowCenter >= scrollOffset) {
 				el.classList.add('animation-class');
 			} 
 			
 		});
 	};


 	const headerFixed = () => {
 		let scrollTop = window.scrollY;
		let approachCenter = approach.offsetHeight / 2;
	

		if (scrollTop >= approachCenter) {
		  nav.classList.add('fixed');
		  nav.style.marginTop = `$ {nav.offsetHeight}px`;
		} else {
		nav.classList.remove('fixed');
		nav.style.marginTop = `0px`;

	}
 }
 	
 	headerFixed();
 	scrollAnimation();
 	
	window.addEventListener('scroll', () => {
		let scroll = document.querySelector('.up')
		scroll.classList.toggle('active', window.scrollY >= 1000)
		scrollAnimation()
		document.querySelector('.up').onclick = function () {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
	})
		scrollAnimation();
		headerFixed();
});