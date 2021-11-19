const submitAnswers = () => {
  const total = 5;
  let score = 0;

  //Get User Input
  const q1 = document.forms["quiz-form"]["q1"].value;
  const q2 = document.forms["quiz-form"]["q2"].value;
  const q3 = document.forms["quiz-form"]["q3"].value;
  const q4 = document.forms["quiz-form"]["q4"].value;
  const q5 = document.forms["quiz-form"]["q5"].value;

  for (let i = 1; i <= total; i++) {
    if (eval("q" + i) === null || eval("q" + i) === "") {
      alert(`You missed question ${i}`);
      return false;
    }
  }

  // Set Correct Answers
  const answers = ["b", "a", "d", "b", "d"];

  // Check Answers
  answers.map((answer, index) => {
    eval("q" + (index + 1)) === answer && score++;
    index++;
  });

  // Display Results
  const results = document.getElementById("results");
  results.innerHTML = `<h3>You scored <span>${score}</span> out of <span>${total}</span></h3>`;
  alert(`Your scored ${score} out of ${total}`);
  return false;
};
