import Section from './components/Section.js';
import Card from './components/card.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js'
import FormValidator from './components/formValidator.js';
import { initialCards, 
    cardListSection,
    profileEditBtn,
    cardAddBtn,
    popupAddCardForm,
    profileName,
    profileTitle,
    nameInput,
    titleInput,
    validationConfig} from './utils/consts.js';

const validationFormEdit = new FormValidator(validationConfig, '.popup__form_edit');
validationFormEdit.enableValidation();

const validationFormAdd = new FormValidator(validationConfig, '.popup__form_add');
validationFormAdd.enableValidation();

const cardsList = new Section({
    items: initialCards,
    renderer: createCard
}, cardListSection
);

cardsList.renderItems();

function createCard(data) {
    const card = new Card(data, handleCardClick);
    const cardElement = card.generateCard(); 
    cardsList.addItem(cardElement);
}

const editPopup = new PopupWithForm({
    popupSelector: '.popup__form_edit',
    handleSubmitForm: (data) => {
        submitEditForm(data);
    }
});
editPopup.setEventListeners();

const addCardPopup = new PopupWithForm({
    popupSelector: '.popup__form_add',
    handleSubmitForm: (data) => {
        createCard(data);
        validationFormAdd.setButtonState(popupAddCardForm.checkValidity());
    }
});
addCardPopup.setEventListeners();

const imgPopup = new PopupWithImage('.popup__img-form')
imgPopup.setEventListeners();

function openAddCardPopup() {
    validationFormAdd.clearErrors();
    addCardPopup.open();
}

function openEditPopup() {
    titleInput.value = profileTitle.textContent;
    nameInput.value = profileName.textContent;
    validationFormEdit.clearErrors();
    editPopup.open();
}

function submitEditForm(data) {
    profileName.textContent = data.name;
    profileTitle.textContent = data.title;
}

function handleCardClick(name, link) {
    imgPopup.open({name, link});
}

profileEditBtn.addEventListener('click', openEditPopup);
cardAddBtn.addEventListener('click', () => {
    validationFormAdd.setButtonState(popupAddCardForm.checkValidity());
    openAddCardPopup();
});