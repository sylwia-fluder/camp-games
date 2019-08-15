import '../css/style.scss';

import quiz_results from '../data/quiz_results.json';
import memory_results from '../data/quiz_results.json';
import './cardDrowing';

import './storage';
import './ranking';
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


// quiz variables

const playBtn = document.getElementById('button_start_quiz');
const questionField = document.getElementById('quiz_question');
const firstAnswerField = document.getElementById('quiz_answer_1');
const secondAnswerField = document.getElementById('quiz_answer_2');
const thirdAnswerField = document.getElementById('quiz_answer_3');

// after click on play button

const play = playBtn.addEventListener('click', () => {
  playBtn.innerHTML = 'Next';
  console.log(shuffledQuizData); // to test
  question();
});

// getting out question and answers from table

const question = () => {
  const firstOfShuffledElements = shuffledQuizData.shift();
  const activeQuestion = firstOfShuffledElements.question;
  const activeAnswers = firstOfShuffledElements.answers;

  questionField.innerHTML = activeQuestion;
  firstAnswerField.innerHTML = activeAnswers[0].text;
  secondAnswerField.innerHTML = activeAnswers[1].text;
  thirdAnswerField.innerHTML = activeAnswers[2].text;

  console.log(firstOfShuffledElements);
};
