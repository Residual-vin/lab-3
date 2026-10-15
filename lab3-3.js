'use strict';
const generateKey = (length, characters) => {
	let key = '';
	const charsLength = characters.length;
	const random = (max) => {
		return Math.floor(Math.random() * (max + 1));
	}
	for (let i = 0; i < length; i++) {
		const index = random(charsLength - 1);
		key += characters[index];
	}
	return key;
}
const characters = 'abcdefg0123456789';
const key = generateKey(16, characters);
console.log(key);
