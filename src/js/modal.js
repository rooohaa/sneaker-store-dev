// Modal
$(document).ready(function() {
   setTimeout( () => {
      showModal();
   }, 5000);
});

const $modal = document.querySelector('.modal'),
      $exitBtn = document.querySelector('.exit-btn'),
      $modalBlock = document.querySelector('.modal-block'),
      $subBtn = document.querySelector('[data-modal]');


$subBtn.addEventListener('click', showModal)
$exitBtn.addEventListener('click', closeModal)

//escape closing

document.addEventListener('keydown', (e) => {
   if (e.code == 'Escape' && $modal.classList.contains('active')) {
      closeModal()
   }
});

document.addEventListener('click', (e) => {
   let target = e.target;

   if (target.classList.contains('modal')) {
      closeModal()
   }
});

//functions

function showModal() {
   $modal.classList.add('active')
   setTimeout( () => {
      $modalBlock.classList.add('modal-block_active')
   }, 300)
}

function closeModal() {
   setTimeout( () => {
      $modal.classList.remove('active')
   }, 350)
   $modalBlock.classList.remove('modal-block_active')
}