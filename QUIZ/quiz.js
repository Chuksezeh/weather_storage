const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('#form');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  
  console.log(form.value)
  const userAnwers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

  userAnwers.forEach((answer, index) => {

    if(answer === correctAnswers[index]){
      score += 25;
    }
  });

});