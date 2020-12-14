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

const profileEditBtn = document.querySelector('.profile__edit-button');
const cardAddBtn = document.querySelector('.profile__add-button');

const popupEditForm = document.getElementsByName('profile-edit-form')[0];
const popupAddCardForm = document.getElementsByName('profile-add-card-form')[0];
const popupImgForm = document.getElementsByName('img-form')[0];

const popupCloseBtns = document.querySelectorAll('.popup__close');

const name = document.querySelector('.profile-info__name');
const title = document.querySelector('.profile-info__title');

const nameInput = document.getElementsByName('profile-edit-name')[0];
const titleInput = document.getElementsByName('profile-edit-title')[0];

const cardNameInput = document.getElementsByName('card-name')[0];
const cardImgInput = document.getElementsByName('card-img')[0];

const cardsContainer = document.querySelector('.cards');

const cardTemplate = document.querySelector('#cards-template').content;