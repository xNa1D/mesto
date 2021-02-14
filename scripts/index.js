import Section from './components/Section.js';
import Card from './components/card.js';
import FormValidator from './components/formValidator.js';
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
const cardListSection = '.cards';

const validationConfig = {
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input-text_type_error',
    errorClass: '.popup__input-text-error'
};

const validationFormEdit = new FormValidator(validationConfig, '.popup__form_edit');
validationFormEdit.enableValidation();
const validationFormAdd = new FormValidator(validationConfig, '.popup__form_add');
validationFormAdd.enableValidation();

const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, showPopup);
        const cardElement = card.generateCard();
        cardsList.addItem(cardElement);
    }
}, cardListSection
);

cardsList.renderItems();

function showPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

function openAddCardPopup() {
    popupAddCardForm.reset();
    validationFormAdd.clearErrors();
    showPopup(addCardPopup);
}

function openEditPopup() {
    titleInput.value = title.textContent;
    nameInput.value = name.textContent;
    validationFormEdit.clearErrors();
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
    const card = new Card(newCard, showPopup);
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
    const popup = popupAddCardForm.closest('.popup');

    validationFormAdd.setButtonState(popupAddCardForm.checkValidity());
    closePopup(popup);
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        closePopup(openedPopup);
    }
}

profileEditBtn.addEventListener('click', openEditPopup);
cardAddBtn.addEventListener('click', () => {
    validationFormAdd.setButtonState(popupAddCardForm.checkValidity());
    openAddCardPopup();
});

popupList.forEach(function (popup) {
    popup.addEventListener('click', function (e) {
        validationFormAdd.setButtonState(popupAddCardForm.checkValidity());
        const { target } = e;
        if (target.classList.contains('popup') || target.classList.contains('popup__close')) {
            closePopup(popup);
        };
    })
});

popupEditForm.addEventListener('submit', submitEditForm);
popupAddCardForm.addEventListener('submit', submitAddCardForm);