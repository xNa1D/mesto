export default class Card {
    constructor(data, myId, cardTemaplteSelector, { handleCardClick, handleDeleteIconClick, handleLikeClick }) {
      this._id = data._id;
      this._link = data.link;
      this._name = data.name;
      this._likes = data.likes;
      this._ownerCardId = data.owner._id;
      this._myId = myId;
      this._handleCardClick = handleCardClick;
      this._handleDeleteIconClick = handleDeleteIconClick;
      this._handleLikeClick = handleLikeClick;
      this._cardTemplate = document.querySelector(cardTemaplteSelector);
    }
    
    _getTemplate() {
        const cardElement = this._cardTemplate.content.cloneNode(true);
        return cardElement;
    }

    _likeCard(likeButton) {
        likeButton.classList.toggle('cards__like_active');
    }

    _setEventListeners() {
        const likeButton = this._element.querySelector('.cards__like');
        likeButton.addEventListener('click', () => {
            this._likeCard(likeButton);
            this._handleLikeClick(this._id, this);
        });

        const delButton = this._element.querySelector('.cards__del');
        delButton.addEventListener('click', () => {
            this._handleDeleteIconClick(this._id);
        });

        const cardImg = this._element.querySelector('.cards__image');
        cardImg.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        })
    }

    _checkDeleteIcon() {
        const deleteIcon = this._element.querySelector('.cards__del');
        if (this._ownerCardId !== this._myId) {
            deleteIcon.classList.add('cards__del_remove');
        } else {
            deleteIcon.classList.remove('cards__del_remove');
        }
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        const cardImg = this._element.querySelector('.cards__image');
        cardImg.src = this._link;
        cardImg.alt = this._name;
        this._element.querySelector('.cards__title').textContent = this._name;

        this._element.querySelector('.cards__likes-counter').textContent = this._likes.length;
        
        this._likes.forEach(likeData => {
            if (likeData._id === this._myId) {
                this._element.querySelector('.cards__like').classList.add('cards__like_active')
            }
        });
        this._checkDeleteIcon();

        this._element.querySelector('.cards__item').id = this._id;
        return this._element;
    }
}