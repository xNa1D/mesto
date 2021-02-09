import Card from './card.js';
import FormValidator from './validate.js';
import { initialCards } from './consts.js';

const profileEditBtn = document.querySelector('.profile__edit-button');
const cardAddBtn = document.querySelector('.profile__add-button');

const popupList = document.querySelectorAll('.popup');
const popupEditForm = document.forms['profile-edit-form'];
const popupAddCardForm = document.forms['profile-add-card-form'];

const editPopup = popupEditForm.closest('.popup');
const addCardPopup = popupAddCardForm.closest('.popup');

const name = document.querySelector('.profile-info__name');
const title = document.querySelector('.profile-info__title');

const nameInput = popupEditForm.elements['profile-edit-name'];
const titleInput = popupEditForm.elements['profile-edit-title'];

const cardNameInput = popupAddCardForm.elements['card-name'];
const cardImgInput = popupAddCardForm.elements['card-img'];

const cardsContainer = document.querySelector('.cards');

function showPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

function openAddCardPopup() {
    popupAddCardForm.reset();
    showPopup(addCardPopup);
}

function openEditPopup() {
    titleInput.value = title.textContent;
    nameInput.value = name.textContent;
    showPopup(editPopup);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape); 
}

function submitEditForm(e) {
    e.preventDefault();
    name.textContent = nameInput.value;
    title.textContent = titleInput.value;
    closePopup(editPopup);
}

function submitAddCardForm(e) {
    e.preventDefault();
    const newCard = {
      name: cardNameInput.value,
      link: cardImgInput.value
    };
    const card = new Card(newCard);
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
    const popup = popupAddCardForm.closest('.popup')
    closePopup(popup);
}

initialCards.forEach(function(entry) {
    const card = new Card(entry);
    const cardElement = card.generateCard();
    cardsContainer.append(cardElement);
});

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened')
      closePopup(openedPopup);
    }
  }

profileEditBtn.addEventListener('click', openEditPopup);
cardAddBtn.addEventListener('click', openAddCardPopup);

popupList.forEach(function(popup) {
    popup.addEventListener('click', function(e) {
        const target = e.target;
        if (target.classList.contains('popup') || target.classList.contains('popup__close')) {
            closePopup(popup);
        };
      })
});

document.addEventListener('keydown', closeByEscape);

popupEditForm.addEventListener('submit', submitEditForm);
popupAddCardForm.addEventListener('submit', submitAddCardForm);