const menuBtn = document.querySelector('.h-menu'),
   nav = document.querySelector('.header__nav');

   let isOpen = false;
   
   menuBtn.addEventListener('click', () => {
      console.log('123');
      if (isOpen) {
         nav.style.display = 'none'
         isOpen = false
         menuBtn.classList.remove('open')
      } else {
         nav.style.display = 'block'
         isOpen = true
         menuBtn.classList.add('open')
      }
});