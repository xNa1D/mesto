let profileEditBtn = document.querySelector('.profile__edit-button');
let cardAddBtn = document.querySelector('.profile__add-button');

const popupEditForm = document.getElementsByName('profile-edit-form')[0];
const popupAddCardForm = document.getElementsByName('profile-add-card-form')[0];

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
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.cards__title').textContent = entry.name;
    cardElement.querySelector('.cards__image').src = entry.link;
    cardElement.querySelector('.cards__image').alt = entry.name;
    cardElement.querySelector('.cards__like').addEventListener('click', function(e) {
        e.target.classList.toggle('cards__like_active');
    });
    cardsContainer.append(cardElement);
});
const cardDelBtns = document.querySelectorAll('.cards__del');

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

function formAddCardSubmit(e) {
    e.preventDefault();
    initialCards.unshift({
      name: cardNameInput.value,
      link: cardImgInput.value
    });
    let newCard = initialCards[0];
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.cards__title').textContent = newCard.name;
    cardElement.querySelector('.cards__image').src = newCard.link;
    cardElement.querySelector('.cards__image').alt = newCard.name;
    cardElement.querySelector('.cards__like').addEventListener('click', function(e) {
        e.target.classList.toggle('cards__like_active');
    });
    cardsContainer.prepend(cardElement);
    closePopup(e);
}

function deletePopup(e) {
  let currentCard = e.currentTarget.closest('.cards__item');
  currentCard.removeEventListener('click', deletePopup);
  currentCard.remove();
}

profileEditBtn.addEventListener('click', openEditPopup);
cardAddBtn.addEventListener('click', openAddCardPopup);
popupCloseBtns.forEach(function(popup) {
    popup.addEventListener('click', closePopup)
});
cardDelBtns.forEach(function(card) {
    card.addEventListener('click', deletePopup)
});
popupEditForm.addEventListener('submit', formEditSubmit);
popupAddCardForm.addEventListener('submit', formAddCardSubmit);