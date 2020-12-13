let profileEditButton = document.querySelector('.profile__edit-button');
let cardAddButton = document.querySelector('.profile__add-button');
//let popup = document.querySelector('.popup');
const popupEditForm = document.getElementsByName('profile-edit-form')[0];
const popupAddCardForm = document.getElementsByName('profile-add-card-form')[0];

const popupCloseButtons = document.querySelectorAll('.popup__close');

let name = document.querySelector('.profile-info__name');
let title = document.querySelector('.profile-info__title');
let nameInput = document.getElementsByName('profile-edit-name')[0];
let titleInput = document.getElementsByName('profile-edit-title')[0];

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

initialCards.forEach(function(entry) {
    const cardTemplate = document.querySelector('#cards-template').content;
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.cards__title').textContent = entry.name;
    cardElement.querySelector('.cards__image').src = entry.link;
    cardElement.querySelector('.cards__image').alt = entry.name;

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
    closeEditPopup();
}

profileEditButton.addEventListener('click', openEditPopup);
cardAddButton.addEventListener('click', openAddCardPopup);
popupCloseButtons.forEach(function(popup) {
    popup.addEventListener('click', closePopup)
  });
popupEditForm.addEventListener('submit', formEditSubmit);