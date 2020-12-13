let profileEditBtn = document.querySelector('.profile__edit-button');
let cardAddBtn = document.querySelector('.profile__add-button');

const popupEditForm = document.getElementsByName('profile-edit-form')[0];
const popupAddCardForm = document.getElementsByName('profile-add-card-form')[0];
const popupImgForm = document.getElementsByName('img-form')[0];

const popupCloseBtns = document.querySelectorAll('.popup__close');

let name = document.querySelector('.profile-info__name');
let title = document.querySelector('.profile-info__title');

let nameInput = document.getElementsByName('profile-edit-name')[0];
let titleInput = document.getElementsByName('profile-edit-title')[0];

let cardNameInput = document.getElementsByName('card-name')[0];
let cardImgInput = document.getElementsByName('card-img')[0];

const cardsContainer = document.querySelector('.cards');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cardTemplate = document.querySelector('#cards-template').content;

initialCards.forEach(function(entry) {
    let cardElement = createCard(entry);
    cardsContainer.append(cardElement);
});

function openPopup(form) {
    form.closest('.popup').classList.add('popup_opened');
}

function openAddCardPopup() {
    openPopup(popupAddCardForm);
}

function openEditPopup() {
    titleInput.value = title.textContent;
    nameInput.value = name.textContent;
    openPopup(popupEditForm);
}

function closePopup(e) {
    let currentPopup = e.currentTarget;
    currentPopup.closest('.popup').classList.remove('popup_opened');
}

function formEditSubmit(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    title.textContent = titleInput.value;
    closePopup(evt);
}

function imgPopup(e) {
    openPopup(popupImgForm);
    popupImgForm.querySelector('.popup__img').src = e.src;
    popupImgForm.querySelector('.popup__img').alt = e.alt;
    popupImgForm.querySelector('.popup__img-name').textContent = e.alt;
}

function formAddCardSubmit(e) {
    e.preventDefault();
    initialCards.unshift({
      name: cardNameInput.value,
      link: cardImgInput.value
    });
    let newCard = initialCards[0];
    const cardElement = createCard(newCard);
    cardsContainer.prepend(cardElement);
    closePopup(e);
}

function deleteCard(e) {
  let currentCard = e.target.closest('.cards__item');
  currentCard.remove();
}

function likeCard(card) {
    card.target.classList.toggle('cards__like_active');
}

function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.cards__title').textContent = card.name;
    cardElement.querySelector('.cards__image').src = card.link;
    cardElement.querySelector('.cards__image').alt = card.name;
    return cardElement;
}

profileEditBtn.addEventListener('click', openEditPopup);
cardAddBtn.addEventListener('click', openAddCardPopup);
popupCloseBtns.forEach(function(popup) {
    popup.addEventListener('click', closePopup)
});
popupEditForm.addEventListener('submit', formEditSubmit);
popupAddCardForm.addEventListener('submit', formAddCardSubmit);

cardsContainer.addEventListener('click', function(card) {  
  if (card.target.classList.contains('cards__del')) {
    deleteCard(card);
  }
  if (card.target.classList.contains('cards__like')) {
    likeCard(card);
  } 
  if (card.target.classList.contains('cards__image')) {
    imgPopup(card.target);
  } 
});