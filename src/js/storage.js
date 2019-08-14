const LOCAL_STORAGE_USERS_SCORE = {
  QUIZ: 'quiz_score',
  MEMORY: 'memory_score',
};

const setUsersScoreForQuiz = (score) => localStorage.setItem(LOCAL_STORAGE_USERS_SCORE.QUIZ, score);
const getUsersScoreForQuiz = localStorage.getItem(LOCAL_STORAGE_USERS_SCORE.QUIZ);

const setUsersScoreForMemory = (score) => localStorage.setItem(LOCAL_STORAGE_USERS_SCORE.MEMORY, score);
const getUsersScoreForMemory = localStorage.getItem(LOCAL_STORAGE_USERS_SCORE.MEMORY);
