import '../css/style.scss';

import quiz_data from '../data/quiz_data.json';
import quiz_results from '../data/quiz_results.json';
import memory_results from '../data/quiz_results.json';

import './storage';
import './ranking';

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
  pageShown(ev) {
  },
  poppin(ev) {
    const hash = location.hash.replace('#', '');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(hash).classList.add('active');
    document.getElementById(hash).dispatchEvent(singlePageApplication.show);
  },
};

document.addEventListener('DOMContentLoaded', singlePageApplication.init);
