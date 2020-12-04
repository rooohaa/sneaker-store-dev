//tabs

const $tabs = document.querySelectorAll('.store__tab'),
      $blocks = document.querySelectorAll('.store__wrapper');


$tabs.forEach(tab => {
   tab.addEventListener('click', () => {
      let currentTab = tab;
      
      let attr = currentTab.getAttribute('data-tab')
      let currentBlock = document.querySelector(attr)

      $tabs.forEach(tab => tab.classList.remove('store__tab-active'))
      $blocks.forEach(block => block.classList.remove('store__wrapper-active'))

      currentTab.classList.add('store__tab-active')
      currentBlock.classList.add('store__wrapper-active')
   });
});