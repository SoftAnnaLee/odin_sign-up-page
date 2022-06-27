/* This code is based on this following stack overflow question;
   https://stackoverflow.com/q/58150828
 */

const pass1 = document.getElementById('password');
const pass2 = document.getElementById('confirm_password');
const passError = document.getElementById('password-error');

function checkValuesNotEmptyAndMatch(val1, val2) {
  if (!val1) return true;
  if (!val2) return true;
  if (val1 === val2) return true;
  return false;
}

function displayPasswordStatus(event) {
  const match = checkValuesNotEmptyAndMatch(pass1.value, pass2.value);

  if (match) {
    pass1.setCustomValidity('');
    pass2.setCustomValidity('');
    passError.innerText = '';
  } else {
    pass1.setCustomValidity('Passwords do not match');
    pass2.setCustomValidity('Passwords do not match');
    passError.innerText = 'Error: Passwords to not match';
  }
}

pass1.addEventListener('blur', (event) => {
  displayPasswordStatus(event);
});
pass2.addEventListener('blur', (event) => {
  displayPasswordStatus(event);
});
