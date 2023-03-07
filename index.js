const correctAnswer = ["B", "B", "C", "A", "B", "A", "C", "C", "D", "A"];
// B, B, C, A, B, A, C, C, D, A;
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

// console.log(questions[0]);

form.addEventListener("submit", event => {
    event.preventDefault();

    let score = 0;
    const usersAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value,
        form.q6.value,
        form.q7.value,
        form.q8.value,
        form.q9.value,
        form.q10.value
    ];
    // debugger
    usersAnswers.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 1;
            questions[index].classList.add("correct");
        } else {
            questions[index].classList.add("wrong");
        }
    });
    // console.log("Your correct answers is " + score);

    scrollTo(0, 0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `Your Score is ${score}`;
});
