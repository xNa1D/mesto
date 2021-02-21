export const cardListSection = '.cards';
export const cardTemplateSelector = '#cards-template';

export const profileEditBtn = document.querySelector('.profile__edit-button');
export const cardAddBtn = document.querySelector('.profile__add-button');
export const avatartEditButton = document.querySelector('.profile__avatar-edit-button');

export const popupEditForm = document.forms['profile-edit-form'];
export const popupAddCardForm = document.forms['profile-add-card-form'];

export const nameInput = popupEditForm.elements['name'];
export const aboutInput = popupEditForm.elements['about'];

export const validationConfig = {
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input-text_type_error',
    errorClass: '.popup__input-text-error'
};

export const apiConfig = {
    url: 'https://mesto.nomoreparties.co/v1',
    groupeId: 'cohort-20',
    headers: {
        authorization: '5cc4ff74-150e-4e0f-9900-9027f42963f8',
        'Content-Type': 'application/json'
    }
  }