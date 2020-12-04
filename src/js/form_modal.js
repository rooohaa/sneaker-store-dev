// form modal
const sendBtn = document.querySelector('.send-btn'),
      modal = document.querySelector('#contacts .modal');


sendBtn.addEventListener('click', (e) => {
   e.preventDefault()

   modal.classList.add('active')

   setTimeout(() => {
      modal.classList.remove('active')
   }, 2400)

});