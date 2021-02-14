import Popup from './Popup.js';

export default class Card {
    constructor(data, showPopup) {
      this._link = data.link;
      this._name = data.name;
      this._showPopup = showPopup;
    }

    _getTemplate() {
        const cardElement = document.querySelector('#cards-template').content.cloneNode(true);
        return cardElement;
    }

    _likeCard(likeButton) {
        likeButton.classList.toggle('cards__like_active');
    }

    _deleteCard(delButton) {
        delButton.closest('.cards__item').remove();
    }

    _showImgPopup() {
        const popupImgForm = document.forms['img-form'];
        const imagePopup = popupImgForm.closest('.popup');
        const popupImgFormData = popupImgForm.querySelector('.popup__img');
        const imagePopupTitle = popupImgForm.querySelector('.popup__img-name');
        this._showPopup(imagePopup);
        popupImgFormData.src = this._link;
        popupImgFormData.alt = this._name;
        imagePopupTitle.textContent = this._name;
    }

    _setEventListeners() {
        const likeButton = this._element.querySelector('.cards__like');
        likeButton.addEventListener('click', () => {
            this._likeCard(likeButton);
        });

        const delButton = this._element.querySelector('.cards__del');
        delButton.addEventListener('click', () => {
            this._deleteCard(delButton);
        });

        const cardImg = this._element.querySelector('.cards__image');
        cardImg.addEventListener('click', () => {
            this._showImgPopup();
        })
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        const cardImg = this._element.querySelector('.cards__image');
        cardImg.src = this._link;
        cardImg.alt = this._name;
        this._element.querySelector('.cards__title').textContent = this._name;

        return this._element;
    }
}