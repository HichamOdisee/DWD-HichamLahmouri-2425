const numPlayers = 10000;
const minNumber = 1000;
const maxNumber = 9999;
const twee5 = 2.5;
const prizes = [twee5, 10, 100, 500];

function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function countMatchingDigits(playerNumber, winningNumber) {
	let count = 0;
	while (playerNumber % 10 === winningNumber % 10 && count < 4) {
		playerNumber = Math.floor(playerNumber / 10);
		winningNumber = Math.floor(winningNumber / 10);
		count++;
	}
	return count;
}

function simulateJokerTrekking() {
	const winningNumber = generateRandomNumber(minNumber, maxNumber);
	const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
	let totalWinnings = 0;

	for (let i = 0; i < numPlayers; i++) {
		const playerNumber = generateRandomNumber(minNumber, maxNumber);
		const matchingDigits = countMatchingDigits(playerNumber, winningNumber);
		totalWinnings += prizes[matchingDigits] || 0;
		results[matchingDigits]++;
	}

	const averageWin = totalWinnings / numPlayers;

	console.log('%c// trekking', 'color: magenta; font-size: 16px');
	console.log('%cgetrokken getal: ' + winningNumber, 'color: yellow;');
	console.log('');
	console.log('%c// gokken', 'color: magenta; font-size: 16px');
	console.log('aantal iteraties: ' + numPlayers);
	console.log('');
	console.log('%c// resultaten', 'color: magenta; font-size: 16px');
	for (let i = 0; i <= 4; i++) {
		console.log(i + ' juist: ' + results[i]);
	}
	console.log('%cgemiddelde winst: €' + averageWin.toFixed(3), 'color: #5d5e23; padding: 10px; background-color: gray;');
}

simulateJokerTrekking();