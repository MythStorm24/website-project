console.log('Carousel JS Loaded');

//Get Carousel Track
const track = document.querySelector('.carousel-track');

//Get Carousel Slide List
const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel-right');

const prevButton = document.querySelector('.carousel-left');

const dotsNav = document.querySelector('.carousel-nav');

const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width; 

//Declare Function To Set Slide Position
const setSlidePosition = (slide, index) =>
{
	slide.style.left = slideWidth * index + 'px';
}


//Arrange Slides Next To Each Other
slides.forEach(setSlidePosition);


//Declare Function To Move Slide
const moveSlide = (track, currentSlide, targetSlide) =>
{	
	//Move To Next Slide
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('carousel-current-slide');
	targetSlide.classList.add('carousel-current-slide');
}


//Declare Function To Update Dots
const updateDots = (currentDot, targetDot) =>
{ 
	currentDot.classList.remove('carousel-current-slide');
	targetDot.classList.add('carousel-current-slide');
}

 
//Click Left Move Slides To Left
prevButton.addEventListener('click', e =>
{
	const currentSlide = track.querySelector('.carousel-current-slide');
	const currentDot = dotsNav.querySelector('.carousel-current-slide');
	
	var prevSlide = currentSlide.previousElementSibling;
	var prevDot = currentDot.previousElementSibling; 

	//Wrap Carousel
	if (!prevSlide)
	{		
		prevSlide = slides[slides.length - 1];
		prevDot = dots[slides.length - 1];
	}
	
	//Move Slide
	moveSlide(track, currentSlide, prevSlide);
	updateDots(currentDot, prevDot);
});


//Click Left Move Slides To Right
nextButton.addEventListener('click', e =>
{
	const currentSlide = track.querySelector('.carousel-current-slide');
	const currentDot = dotsNav.querySelector('.carousel-current-slide');
	
	var nextSlide = currentSlide.nextElementSibling;
	var nextDot = currentDot.nextElementSibling;
	
	//Wrap Carousel
	if (!nextSlide)
	{		
		nextSlide = slides[0];
		nextDot = dots[0];
	}
	
	//Move Slide
	moveSlide(track, currentSlide, nextSlide);
	updateDots(currentDot, nextDot);
})


//Click Indicator To Move To Slide
dotsNav.addEventListener('click', e =>
{
	const targetDot = e.target.closest('button');
	
	if (!targetDot) return;

	const currentSlide = track.querySelector('.carousel-current-slide');
	const currentDot = dotsNav.querySelector('.carousel-current-slide');
	const targetIndex = dots.findIndex(dot => dot === targetDot);
	const targetSlide = slides[targetIndex];
	 
	moveSlide(track, currentSlide, targetSlide);
	updateDots(currentDot, targetDot);
})