import Section from './components/Section.js';
import Card from './components/card.js';
import Popup from './components/Popup.js';
import FormValidator from './components/formValidator.js';
import { initialCards, 
    cardListSection,
    profileEditBtn,
    cardAddBtn,
    popupList,
    popupEditForm,
    popupAddCardForm,
    profileName,
    profileTitle,
    nameInput,
    titleInput,
    cardNameInput,
    cardImgInput,
    cardsContainer,
    validationConfig} from './utils/consts.js';

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

const editPopup = new Popup('.popup__form_edit');
editPopup.setEventListeners();

const addCardPopup = new Popup('.popup__form_add');
addCardPopup.setEventListeners();

function showPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

function openAddCardPopup() {
    popupAddCardForm.reset();
    validationFormAdd.clearErrors();
    addCardPopup.open();
}

function openEditPopup() {
    titleInput.value = profileTitle.textContent;
    nameInput.value = profileName.textContent;
    validationFormEdit.clearErrors();
    editPopup.open();
}

// function closePopup(popup) {
//     popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closeByEscape);
// }

function submitEditForm(e) {
    e.preventDefault();
    profileName.textContent = nameInput.value;
    profileTitle.textContent = titleInput.value;
    editPopup.close();
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

    validationFormAdd.setButtonState(popupAddCardForm.checkValidity());
    addCardPopup.close();
}

// function closeByEscape(evt) {
//     if (evt.key === 'Escape') {
//         const openedPopup = document.querySelector('.popup_opened')
//         closePopup(openedPopup);
//     }
// }

profileEditBtn.addEventListener('click', openEditPopup);
cardAddBtn.addEventListener('click', () => {
    validationFormAdd.setButtonState(popupAddCardForm.checkValidity());
    openAddCardPopup();
});

// popupList.forEach(function (popup) {
//     popup.addEventListener('click', function (e) {
//         validationFormAdd.setButtonState(popupAddCardForm.checkValidity());
//         const { target } = e;
//         if (target.classList.contains('popup') || target.classList.contains('popup__close')) {
//             closePopup(popup);
//         };
//     })
// });

popupEditForm.addEventListener('submit', submitEditForm);
popupAddCardForm.addEventListener('submit', submitAddCardForm);