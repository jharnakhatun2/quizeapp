document.getElementById('submitQuiz').addEventListener('click', function () {
    const correctAnswers = {
        q1: 'Paris',
        q2: 'JavaScript'
    };

    let score = 0;

    // Collect user responses
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value
    };

    // Validate answers
    for (let key in correctAnswers) {
        if (userAnswers[key] === correctAnswers[key]) {
            score++;
            document.querySelector(`input[name="${key}"][value="${correctAnswers[key]}"]`).parentElement.classList.add('correct');
        } else {
            document.querySelector(`input[name="${key}"][value="${userAnswers[key]}"]`).parentElement.classList.add('wrong');
        }
    }

    // Display result
    document.getElementById('result').innerText = `You got ${score}/2 correct!`;
});
