const infographic = document.querySelector('.infographic-image');
infographic.addEventListener('click', function(event) {
	let posX = event.offsetX;
	let posY = event.offsetY;
	let hovX = 0;
	let hovY = 0;
	if (!infographic.classList.contains('zoom')) {
		infographic.style.setProperty('--x', posX + 'px');
		infographic.style.setProperty('--y', posY + 'px');		
	}
	infographic.classList.toggle('zoom');
	infographic.addEventListener('mousemove', function(event) {
		mouseMoveInfographic(posX, posY, infographic, event);
	});	
	infographic.style.setProperty('--hovx', hovX + 'px');
	infographic.style.setProperty('--hovy', hovY + 'px');
})

function mouseMoveInfographic(posX, posY, infographic, event) {
	if (infographic.classList.contains('zoom')) {
		hovX = (posX - event.offsetX) / 2;
		hovY = (posY - event.offsetY) / 2;		
		infographic.style.setProperty('--hovx', hovX + 'px');
		infographic.style.setProperty('--hovy', hovY + 'px');
	}
}