export function getLetterMatchCount(guessedWord, secretWord) {
	const secretWordSet = new Set(secretWord.split(''));
	const guessedWordSet = new Set(guessedWord.split(''));
	return [...secretWordSet].filter(l => guessedWordSet.has(l)).length;
}
