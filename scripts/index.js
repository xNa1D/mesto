import Section from './components/Section.js';
import Card from './components/card.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js'
import UserInfo from './components/UserInfo.js';
import FormValidator from './components/formValidator.js';
import { initialCards, 
    cardListSection,
    profileEditBtn,
    cardAddBtn,
    popupAddCardForm,
    nameInput,
    titleInput,
    validationConfig} from './utils/consts.js';

const UserData = new UserInfo({
    nameSelector: '.profile-info__name',
    titleSelector: '.profile-info__title'
});
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
        UserData.setUserInfo(data);
    }
});
editPopup.setEventListeners();

const addCardPopup = new PopupWithForm({
    popupSelector: '.popup__form_add',
    handleSubmitForm: (data) => {
        createCard(data);
    }
});
addCardPopup.setEventListeners();

const imgPopup = new PopupWithImage('.popup__img-form')
imgPopup.setEventListeners();

function openAddCardPopup() {
    validationFormAdd.clearErrors();
    validationFormAdd.setButtonState(popupAddCardForm.checkValidity());
    addCardPopup.open();
}

function openEditPopup() {
    const data = UserData.getUserInfo();
    nameInput.value = data.name;
    titleInput.value = data.title;
    validationFormEdit.clearErrors();
    validationFormEdit.setButtonState(popupAddCardForm.checkValidity());
    editPopup.open();
}

function handleCardClick(name, link) {
    imgPopup.open({name, link});
}

profileEditBtn.addEventListener('click', openEditPopup);
cardAddBtn.addEventListener('click', openAddCardPopup);