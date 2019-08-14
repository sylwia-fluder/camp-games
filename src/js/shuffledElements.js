import quiz_data from '../data/quiz_data.json';

const shuffledElements = (array) => array.sort(() => Math.random() - 0.5);

const shuffledAnswers = (array) => array.questions.map(question => shuffledElements(question.answers));
const shuffledQuestions = (array) => shuffledElements(array.questions);

export const shuffledQuizData = shuffledAnswers(quiz_data) && shuffledQuestions(quiz_data);