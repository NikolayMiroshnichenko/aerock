const videoContainer = document.querySelector('.js-video');
const videoModalOverlay = document.querySelector('.js-video-overlay-modal');
const videoModalIframe = document.querySelector('.js-video-overlay-modal__video');
const videoModalClose = document.querySelector('.js-video-overlay-modal__close');

videoContainer.addEventListener('click', openVideo);
videoModalClose.addEventListener('click', closeVideo);

function openVideo(e) {
	const event = e.target.parentElement;
	if (!event.classList.contains('video-item__active')) return;
	videoModalOverlay.style.display = 'block';
	videoModalIframe.src = event.dataset.url;
}

function closeVideo() {
	videoModalOverlay.style.display = 'none';
	videoModalIframe.src = '';
}
