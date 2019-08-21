import {
    shuffledQuizData,
} from './shuffledElements';

// Play the sound
const playSndBtn = document.getElementById('button_start_sound');
const questionSnd = [];
for (let i = 0; i < shuffledQuizData.length; i++) {
    questionSnd[i] = shuffledQuizData[i].sound;
    console.log(questionSnd[i]);
}

const changeSnd = (newSnd) => {
    let sound = new Audio(newSnd);
    return sound;
}

let snd = "";

const playSnd = () => {
    snd = changeSnd(questionSnd[num]);
    setTimeout(function() {
        snd.play();
        setTimeout(function() {
            snd.pause();
            snd.currentTime = 0;
        }, 10000);
    }, 500);
}

playSndBtn.addEventListener('click', playSnd);