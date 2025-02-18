function isCorrectPassword(pw) {
	if (pw.length < 9) return false;
	if (pw.includes('@')) return false;
	if (pw === 'password') return false;
	return true;
}

// Main functie
function main() {
	// Alle wachtwoorden
	const passwords = [
		'klepketoe',
		'test',
		'Azerty123',
		'rogier@work',
		'password',
		'MisterNasty12',
		'pwnz0red'
	];

	// Print alle wachtwoorden
	console.log('Alle wachtwoorden:');
	passwords.forEach((pw, index) => {
		console.log(`${index + 1}. ${pw}`);
	});
	console.log('');

	// Lijsten voor correcte en incorrecte wachtwoorden
	const welOk = [];
	const nietOk = [];
    
	passwords.forEach(pw => {
		if (isCorrectPassword(pw)) {
			welOk.push(pw);
		} else {
			nietOk.push(pw);
		}
	});

	// Print de resultaten
	console.log('%cOk: ' + welOk.join(', '), 'color: darkgreen');
	console.log('%cNiet ok: ' + nietOk.join(', '), 'color: darkred');
}

main();
