export default class FormValidator {
  constructor(data) {
    this._formSelector = data.formSelector;
  }
}

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input-text_type_error',
  errorClass: '.popup__input-text-error'
};

function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
}

function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    input.classList.remove(config.inputErrorClass);
}

function checkInputValidity(form, input, config) {
    if(input.validity.valid) {
      hideError(form, input, config);
    } else {
      showError(form, input, config);
    }
}

function setButtonState(button, isActive, config) {
  if (isActive) {
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
  } else {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = true;
  }
}

function setEventListener(form, config) {
  const inputList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);

  inputList.forEach(function(input) {
    input.addEventListener('input', function(evt) {
        checkInputValidity(form, input, config);
        setButtonState(submitButton, form.checkValidity(), config);
      })
});
}

function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach(function(form) {
    setEventListener(form, config);

    const submitButton = form.querySelector(config.submitButtonSelector);
    setButtonState(submitButton, form.checkValidity(), config);
  })
}
enableValidation(validationConfig);