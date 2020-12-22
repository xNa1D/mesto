// function enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input-text',
//     submitButtonSelector: '.popup__button-save',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   }) {};

function showError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add('popup__input-text_type_error');
}

function hideError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    input.classList.remove('popup__input-text_type_error');
}

function checkInputValidity(form, input) {
    if(input.validity.valid) {
      hideError(form, input);
    } else {
      showError(form, input);
    }
}

function setButtonState(button, isActive) {
  if (isActive) {
      button.classList.remove('popup__button-save_disabled');
      button.disabled = false;
  } else {
      button.classList.add('popup__button-save_disabled');
      button.disabled = true;
  }
}

inputList.forEach(function(input) {
    input.addEventListener('input', function(evt) {
        checkInputValidity(popupEditForm, input);
      });
});