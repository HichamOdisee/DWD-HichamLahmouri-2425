const inpEmail = document.querySelector('#inpEmail');
const selMeasure = document.querySelector('#selMeasure');
const lblMessage = document.querySelector('#lblMessage');
const frmOrder = document.querySelector('#frmOrder');
const modelLinks = document.querySelectorAll('#model a');
const figShoe = document.querySelector('#figShoe');
const figCaption = figShoe.querySelector('figcaption span');
const basePrice = 54.99;
const accessories = document.querySelectorAll('#accessoires .accessoire input[type="checkbox"]');

modelLinks.forEach(function(lnk) {
	lnk.addEventListener('click', function(e) {
		e.preventDefault();
		figShoe.querySelector('img').src = lnk.getAttribute('href');
		figCaption.textContent = lnk.textContent;

		document.querySelector('#model .selected').classList.remove('selected');
		lnk.classList.add('selected');
	});
});

function calculateTotalPrice() {
	let totalPrice = basePrice;
	accessories.forEach(function(accessory) {
		if (accessory.checked) {
			totalPrice += parseFloat(accessory.value);
		}
	});
	return totalPrice.toFixed(2);
}

frmOrder.addEventListener('submit', function(e) {
	e.preventDefault();
	lblMessage.textContent = '';

	let numErrors = 0;
	if (!inpEmail.value || !inpEmail.value.includes('@')) {
		document.querySelector('#msgEmail').textContent = 'Vul een geldig e-mailadres in.';
		numErrors++;
	} else {
		document.querySelector('#msgEmail').textContent = '';
	}

	if (!selMeasure.value) {
		document.querySelector('#msgMaat').textContent = 'Kies je maat.';
		numErrors++;
	}

	if (numErrors == 0) {
		const totalPrice = calculateTotalPrice();
		lblMessage.innerHTML = `Bedankt voor je bestelling! De totale prijs is: €${totalPrice}`;
	}
});