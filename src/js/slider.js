//slider

const $prevBtn = document.querySelector('.prev'),
      $nextBtn = document.querySelector('.next'),
      $slides = document.querySelectorAll('.slide_block');

let autoSlide = true;
let interval;

//functions

const prevSlide = () => {
   const current = document.querySelector('.slide_block_current')

   current.classList.remove('slide_block_current')

   if (current.previousElementSibling) {
      current.previousElementSibling.classList.add('slide_block_current')
   } else {
      $slides[$slides.length - 1].classList.add('slide_block_current')
   }
}

const nextSlide = () => {
   const current = document.querySelector('.slide_block_current')

   current.classList.remove('slide_block_current')

   if (current.nextElementSibling) {
      current.nextElementSibling.classList.add('slide_block_current')
   } else {
      $slides[0].classList.add('slide_block_current')
   }
}

//add listeners
$prevBtn.addEventListener('click', () => {
   prevSlide()

   if (autoSlide) {
      clearInterval(interval)
      interval = setInterval(nextSlide, 4000)
   }
})

$nextBtn.addEventListener('click', () => { 
   nextSlide()

   if (autoSlide) {
      clearInterval(interval)
      interval = setInterval(nextSlide, 4000)
   }
})

if (autoSlide) {
   interval = setInterval(nextSlide, 4000)
}
