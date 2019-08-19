import '../css/style.scss';

import quiz_results from '../data/quiz_results.json';
import memory_results from '../data/quiz_results.json';

import './storage';
import './ranking';
import './quizValidation';
import {
  shuffledQuizData,
} from './shuffledElements';


// single page application function
const singlePageApplication = {
  activePage: [],
  show: new Event('show'),
  init() {
    singlePageApplication.activePage = document.querySelectorAll('.active');
    singlePageApplication.activePage.forEach((pg) => {
      pg.addEventListener('show', singlePageApplication.pageShown);
    });
    document.querySelectorAll('.link').forEach((link) => {
      link.addEventListener('click', singlePageApplication.nav);
    });
    history.replaceState({}, 'Memory', '#memory');
    window.addEventListener('hashchange', singlePageApplication.poppin);
  },
  nav(event) {
    event.preventDefault();
    const activePage = event.target.getAttribute('data-target');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(activePage).classList.add('active');
    history.pushState({}, activePage, `#${activePage}`);
    document.getElementById(activePage).dispatchEvent(singlePageApplication.show);
  },
  pageShown(ev) {},
  poppin(ev) {
    const hash = location.hash.replace('#', '');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(hash).classList.add('active');
    document.getElementById(hash).dispatchEvent(singlePageApplication.show);
  },
};

document.addEventListener('DOMContentLoaded', singlePageApplication.init);



const playBtn = document.getElementById('button_start_quiz');
const questionField = document.getElementById('quiz_question');
const firstAnswerField = document.getElementById('quiz_answer_1');
const secondAnswerField = document.getElementById('quiz_answer_2');
const thirdAnswerField = document.getElementById('quiz_answer_3');

let num = 0;
const answers = [];

// quiz function
function quiz() {
  const question = shuffledQuizData[num].question;
  const answersArr = shuffledQuizData[num].answers;
  const pickedAnswerNode = document.querySelector('.answer.picked');

  questionField.innerHTML = question;
  firstAnswerField.innerHTML = answersArr[0].text;
  secondAnswerField.innerHTML = answersArr[1].text;
  thirdAnswerField.innerHTML = answersArr[2].text;

  if (!pickedAnswerNode)
    return false;

  const pickedAnswerObject = answersArr.find(answer => (
    answer.text === pickedAnswerNode.textContent
  ));

  const answer = {
    question,
    answer: pickedAnswerObject.text,
    correct: pickedAnswerObject.correct
  };

  answers.push(answer);
  console.log(answers);

  if (++num >= shuffledQuizData.length)
    playBtn.textContent = 'Finish quiz';

  resetAnswerButtons();
}

// listeners
firstAnswerField.addEventListener('click', () => {
  resetAnswerButtons();
  firstAnswerField.classList.add('picked');
});

secondAnswerField.addEventListener('click', () => {
  resetAnswerButtons();
  secondAnswerField.classList.add('picked');
});

thirdAnswerField.addEventListener('click', () => {
  resetAnswerButtons();
  thirdAnswerField.classList.add('picked');
});

function resetAnswerButtons() {
  const answerButtons = document.querySelectorAll('[id^="quiz_answer"]');
  answerButtons.forEach(answerButton => answerButton.classList.remove('picked'));
}

playBtn.addEventListener('click', () => {
  if (num >= shuffledQuizData.length)
    return;

  playBtn.innerHTML = 'Next';
  quiz();
})