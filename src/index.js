import './pages/index.css';
import Api from './scripts/components/Api';
import Section from './scripts/components/Section.js';
import Card from './scripts/components/Card.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';
import PopupWithConfirm from './scripts/components/PopupWithConfirm.js';
import UserInfo from './scripts/components/UserInfo.js';
import FormValidator from './scripts/components/FormValidator.js';
import { cardListSection,
    profileEditBtn,
    cardAddBtn,
    avatartEditButton,
    popupAddCardForm,
    nameInput,
    aboutInput,
    validationConfig,
    cardTemplateSelector,
    apiConfig} from './scripts/utils/consts.js';
    
const api = new Api(apiConfig); 

api.getAllInfo()
  .then(([dataUser, dataCards]) => {
    userData.setUserInfo(dataUser);
    userData.updateUserInfo();
    cardsList.renderItems(dataCards);
  })
  .catch(err => console.log(err));

const userData = new UserInfo({
    nameSelector: '.profile-info__name',
    aboutSelector: '.profile-info__about',
    avatarSelector: '.profile__avatar'
});

const validationFormEdit = new FormValidator(validationConfig, '.popup__form_edit');
validationFormEdit.enableValidation();

const validationFormAdd = new FormValidator(validationConfig, '.popup__form_add');
validationFormAdd.enableValidation();

const validationFormEditAvatar = new FormValidator(validationConfig, '.popup__form_avatar');
validationFormEditAvatar.enableValidation();

const cardsList = new Section({
    renderer: createCard 
}, cardListSection
);
  
function createCard(data) {
    const card = new Card(data, userData.getMyId(), cardTemplateSelector, {
        handleCardClick: (name, link) => {
            imgPopup.open({name, link});
        },
        handleDeleteIconClick: (cardId) => {
            delCardPopup.open(cardId);
        },
        handleLikeClick: (cardId, card) => {
            const currentCard = document.getElementById(cardId);
            const isLike = currentCard.querySelector('.cards__like').classList.contains('cards__like_active');
            const likeCounter = currentCard.querySelector('.cards__likes-counter');
            if(isLike) {
                api.addLikeCard(cardId)
                  .then((data) => {
                      likeCounter.textContent = data.likes.length;
                  })
                  .catch(err => console.log(err));
            } else {
                api.removeLikeCard(cardId)
                .then((data) => {
                    likeCounter.textContent = data.likes.length;
                })
                .catch(err => console.log(err));
            }
        }
    });
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
}

const editPopup = new PopupWithForm({
    popupSelector: '.popup__form_edit',
    handleSubmitForm: (data) => {
        api.updateUserData(data.name, data.about)
          .then((data) => {
            userData.setUserInfo(data);
            userData.updateUserInfo();
          })
          .catch((err) => console.log(err));
    }
});
editPopup.setEventListeners();

const addCardPopup = new PopupWithForm({
    popupSelector: '.popup__form_add',
    handleSubmitForm: (data) => {
        api.addNewCard(data.name, data.link, data.likes)
          .then((data) => createCard(data))
          .catch(err => console.log(err));
    }
});
addCardPopup.setEventListeners();

const avatarUpdate = new PopupWithForm({
    popupSelector: '.popup__form_avatar',
    handleSubmitForm: (data) => {
        api.updateAvatar(data.link)
        .then((data) => {
            userData.setUserInfo(data);
            userData.updateUserInfo();
        })
        .catch(err => console.log(err));
    }
});
avatarUpdate.setEventListeners();

const delCardPopup = new PopupWithConfirm({
    popupSelector: '.popup__form_del',
    handleSubmitForm: (cardId) => {
        api.deleteCard(cardId)
        .catch(err => console.log(err));
        document.getElementById(cardId).remove();
    }
});
delCardPopup.setEventListeners();

const imgPopup = new PopupWithImage('.popup__img-form')
imgPopup.setEventListeners();

function openAddCardPopup() {
    validationFormAdd.clearErrors();
    validationFormAdd.setButtonState(popupAddCardForm.checkValidity());
    addCardPopup.open();
}

function openEditPopup() {
    const data = userData.getUserInfo();
    nameInput.value = data.name;
    aboutInput.value = data.about;
    validationFormEdit.clearErrors();
    validationFormEdit.setButtonState(popupAddCardForm.checkValidity());
    editPopup.open();
}

function openAvatarEditPopup() {
    validationFormEditAvatar.clearErrors();
    validationFormEditAvatar.setButtonState(popupAddCardForm.checkValidity());
    avatarUpdate.open();
}

profileEditBtn.addEventListener('click', openEditPopup);
cardAddBtn.addEventListener('click', openAddCardPopup);
avatartEditButton.addEventListener('click', openAvatarEditPopup);