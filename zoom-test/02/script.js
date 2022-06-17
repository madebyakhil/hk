const infographic = document.querySelector('.infographic-image');
infographic.addEventListener('click', function(event) {
	let posX = event.offsetX;
	let posY = event.offsetY;
	if (!infographic.classList.contains('zoom')) {
		infographic.style.setProperty('--x', posX + 'px');
		infographic.style.setProperty('--y', posY + 'px');
	}
	infographic.classList.toggle('zoom');
})