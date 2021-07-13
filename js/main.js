import { headerTemplate, footerTemplate, modalTemlate, callTemlate } from './components.js';

const header = document.querySelector('header');
const footer = document.querySelector('footer');
const modal = document.querySelector('.modal-wrapper');
const call = document.querySelector('.js-call-block');


function creatComponent(murkup, root) {
	root.insertAdjacentHTML('afterbegin', murkup);
}

creatComponent(headerTemplate, header);
creatComponent(footerTemplate, footer);
creatComponent(modalTemlate, modal);
creatComponent(callTemlate, call);





// Откритие Каталога у Хедере  
const menuCatalogBtn = document.querySelector('.js-open-catalog');
const menuCatalog = document.querySelector('.js-header-catalog');

menuCatalogBtn.addEventListener('click', openMenuCalog);

function openMenuCalog() {
	if (menuCatalog.classList.contains('active')) {
		menuCatalog.classList.remove('active');
		return;
	}
	menuCatalog.classList.add('active');
}


// Open the modal
const openModalBtn = document.querySelectorAll('.js-open-modal');
const closeModalBtn = document.querySelector('.modal-close');
const modalWrapper = document.querySelector('.modal-wrapper');

openModalBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    modalWrapper.style.display = 'block';
  });
});

closeModalBtn.addEventListener('click', () => {
  modalWrapper.style.display = 'none';
});
