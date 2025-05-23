const form = document.querySelector('.feedback-form');
let formData = {};
const localStorageKey = 'feedback-form-state';
const fillFormFields = form => {
  const formDataFromLS = JSON.parse(localStorage.getItem(localStorageKey));
  if (formDataFromLS === null) return;
  formData = formDataFromLS;
  for (const key of Object.keys(formDataFromLS)) {
    form.elements[key].value = formDataFromLS[key];
  }
};

fillFormFields(form);

const onFormChange = ({ target: formField }) => {
  const formFieldName = formField.name;
  const formFieldValue = formField.value;
  formData[formFieldName] = formFieldValue;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

const onFormSubmit = event => {
  const emailValue = event.target.elements.email.value;
  const messageValue = event.target.elements.message.value;
  if (emailValue === '' || messageValue === '') {
    alert('Fill please all fields');
    return;
  }
  event.preventDefault();
  localStorage.removeItem(localStorageKey);
  event.target.reset();
  console.log(formData);
  formData = {};
};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('change', onFormChange);
