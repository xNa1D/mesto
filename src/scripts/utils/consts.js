export const initialCards = [
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

export const cardListSection = '.cards';
export const cardTemplateSelector = '#cards-template';

export const profileEditBtn = document.querySelector('.profile__edit-button');
export const cardAddBtn = document.querySelector('.profile__add-button');

export const popupEditForm = document.forms['profile-edit-form'];
export const popupAddCardForm = document.forms['profile-add-card-form'];

export const nameInput = popupEditForm.elements['name'];
export const titleInput = popupEditForm.elements['title'];

export const validationConfig = {
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input-text_type_error',
    errorClass: '.popup__input-text-error'
};