import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup{
    constructor({popupSelector, handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__form');
    }

    setEventListeners() {
        this._submitButton = this._form.querySelector('.popup__button-save');
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitButton.textContent = 'Удаление...';
            this._handleSubmitForm(this._cardId);
            super.close();
        })
        super.setEventListeners();
    }

    open(cardId) {
        this._cardId = cardId;
        super.open();
    }
}