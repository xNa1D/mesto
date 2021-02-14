import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        this.inputList = this._form.querySelectorAll('.popup__input-text');
        this.inputValues = {};
        this.inputList.forEach(element => {
            this.inputValues[element.name] = element.value;
        });
        return this.inputValues
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this.close();
        })
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();
    }
}