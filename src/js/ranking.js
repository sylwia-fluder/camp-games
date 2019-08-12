const sortElementsByScore = (array) => array.sort((a, b) => b.score - a.score);
const findIndexInRanking = (array, score) => array.findIndex(e => score >= e.score);