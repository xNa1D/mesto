export default class FormValidator {
  constructor(configValidation, formSelector) {
    this._config = configValidation;
    this._formElement = document.querySelector(formSelector);
    this._buttonSubmit = this._formElement.querySelector(this._config.submitButtonSelector);
    this._inputs = this._formElement.querySelectorAll('.popup__input-text');
  }

  _showError(input) {
    const error = this._formElement.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(this._config.inputErrorClass);
  }

  _hideError(input) {
    const error = this._formElement.querySelector(`#${input.id}-error`);
    error.textContent = "";
    input.classList.remove(this._config.inputErrorClass);
  }

  clearErrors() {
    this._inputs.forEach(element => {
      this._hideError(element);
    });
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  }

  setButtonState(isActive) {
    if (isActive) {
      this._buttonSubmit.classList.remove(this._config.inactiveButtonClass);
      this._buttonSubmit.disabled = false;
    } else {
      this._buttonSubmit.classList.add(this._config.inactiveButtonClass);
      this._buttonSubmit.disabled = true;
    }
  }

  _setEventListener() {
    this._formElement.addEventListener('input', (evt) => {
      const input = evt.target;
      this._checkInputValidity(input);
      this.setButtonState(this._formElement.checkValidity());
    })
  }

  enableValidation() {
    this._setEventListener();
    this.setButtonState(this._formElement.checkValidity());
  }
}