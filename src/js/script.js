//Promo changnig word

const $word = document.querySelector('.promo__word'),
      words = ['неё', 'него', 'вас', 'всех'];  

setWord('всех')

function getWord() {
   let index = Math.round(Math.random() * 3);
   
   return words[index];
}

function setWord(word) {
   $word.innerHTML = word;
}

setInterval( () => {
   setWord(getWord());
}, 1700);


$(function() {
   $(document).scroll(function() {
     let $nav = $(".header");
     $nav.toggleClass('header-scrolled', $(this).scrollTop() > $nav.height());
   });
});