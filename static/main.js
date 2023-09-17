    // Generate a random number between 1 and 10
    const correct_ans  = Math.floor(Math.random() * 10) + 1;
    
    let attempts = 3; // Number of attempts allowed

    const guessInput = document.getElementById('guessInput');
    const guessSubmit = document.getElementById('guessSubmit');
    const message = document.getElementById('message');
    const attemptsSpan = document.getElementById('attempts');

    guessSubmit.addEventListener('click', checkGuess);
    // Function to handle the player's guess


    function checkGuess() {
        const userGuess = parseInt(guessInput.value);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            message.textContent = 'Please enter a valid number between 1 and 10.';
            return;
        }

        attempts--;

        if (userGuess === correct_ans ) {
            message.textContent = `Congratulations! You guessed the correct number (${correct_ans })!`;
            guessInput.disabled = true;
            guessSubmit.disabled = true;
        } else {
            let hint = `Wrong guess! The correct ans  is ${(userGuess < correct_ans ) ? 'greater' : 'smaller'}.`;
            if (attempts === 0) {
                hint += ` You've run out of attempts. The correct number was ${correct_ans }.`;
                guessInput.disabled = true;
                guessSubmit.disabled = true;
            }
            message.textContent = hint;
        }

        attemptsSpan.textContent = attempts;
        guessInput.value = ''; 
    }
