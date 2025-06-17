let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let attempts = 0;
let maxAttempts = 10;

const guessInput = document.getElementById('guessInput');
const guessSubmit = document.getElementById('guessSubmit');
const message = document.getElementById('message');
const showAttempts = document.getElementById('attempts');
const reset = document.getElementById('reset');

guessSubmit.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);

    if(guessInput.value.trim() === ''){
        message.textContent = 'Please enter any number between 1 and 100';
        return;
    }
    if(userGuess < 1 || userGuess > 100){
        message.textContent = 'Please enter the valid number';
        return;
    }

    attempts++;

    if(userGuess < randomNumber){
        message.textContent = '📉 Too low';
    }else if(userGuess > randomNumber){
        message.textContent = '📈 Too high';
    }else{
        message.textContent = `🎉 Right guess! You guessed it in ${attempts} attempts.`;
        guessSubmit.disabled = true;
        guessInput.disabled = true;
    }

    if(attempts >= maxAttempts && userGuess !=randomNumber){
        message.textContent = `Game Over! The number was ${randomNumber}.`;
        guessInput.disabled = true;
        guessSubmit.disabled = true;
    }

    showAttempts.textContent = `Attempts: ${attempts}`;
    guessInput.value = '';
    guessInput.focus();

});

guessInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        guessSubmit.click();
    }
});


reset.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = '';
    guessInput.disabled = false;
    guessSubmit.disabled = false;
    guessInput.value = '';
    guessInput.focus();
    showAttempts.textContent = `Attempts: ${attempts}`;
});

document.addEventListener('keydown', (event)=> {
    if (event.key === 'Escape'){
        reset.click();
    }
}); 