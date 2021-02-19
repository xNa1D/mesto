import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._img = document.querySelector(popupSelector).querySelector('.popup__img');
        this._imgName = document.querySelector(popupSelector).querySelector('.popup__img-name');
    }

    open(data) {
        this._img.src = data.link;
        this._img.alt = data.name;
        this._imgName.textContent = data.name;
        super.open();
    }
}