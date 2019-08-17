let score = 0;
const logicAndScore = (questionCounter = 0, answersCounter = 0) => {
    const dataValidation = shuffledQuizData[questionCounter].answers[answersCounter].correct;

    if (dataValidation === true) {
        score++;
    }
    return score;
};