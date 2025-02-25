const bidForm = document.querySelector('#bid-form');
const bodnaam = document.querySelector('#bod-naam');
const bod = document.querySelector('#bod');
const message = document.querySelector('.message');
let hoogsteBod = 0;
let besteBieder = '';

bidForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const bodWaarde = parseFloat(bod.value);
	const naamWaarde = bodnaam.value;

	if (!bodWaarde) {
		message.textContent = 'Er is nog geen bod uitgebracht.';
		return;
	}

	if (bodWaarde && bodWaarde > hoogsteBod) {
		hoogsteBod = bodWaarde;
		besteBieder = naamWaarde;
		message.innerHTML = `Gefeliciteerd ${besteBieder} ! Je hebt momenteel het hoogste bod.`;
	} else {
		message.innerHTML = `Jammer! ${besteBieder} heeft een hoger bod.`;
	}
});
