const formEl = document.querySelector('form');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Provide a non-zero & +ve height value';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Provide a non-zero & +ve Weight value';
  } else {
    let bmi = (weight / height ** 2 / 10000).toFixed(2);

    // dsiply BMI in result
    result.innerHTML = `<span> ${bmi} </span>`;
  }
});
