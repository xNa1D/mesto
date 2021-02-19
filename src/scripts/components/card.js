import Popup from './Popup.js';

export default class Card {
    constructor(data, handleCardClick) {
      this._link = data.link;
      this._name = data.name;
      this._handleCardClick = handleCardClick;
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
            this._handleCardClick(this._name, this._link);
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