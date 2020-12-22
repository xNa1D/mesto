const profileEditBtn = document.querySelector('.profile__edit-button');
const cardAddBtn = document.querySelector('.profile__add-button');

const popupEditForm = document.forms['profile-edit-form'];
const popupAddCardForm = document.forms['profile-add-card-form'];
const popupImgForm = document.forms['img-form'];

const popupCloseBtns = document.querySelectorAll('.popup__close');

const name = document.querySelector('.profile-info__name');
const title = document.querySelector('.profile-info__title');

const inputList = popupEditForm.querySelectorAll('.popup__input-text');
const nameInput = popupEditForm.elements['profile-edit-name'];
const titleInput = popupEditForm.elements['profile-edit-title'];

const cardNameInput = popupAddCardForm.elements['card-name'];
const cardImgInput = popupAddCardForm.elements['card-img'];

const cardsContainer = document.querySelector('.cards');

const cardTemplate = document.querySelector('#cards-template').content;

initialCards.forEach(function(entry) {
    const cardElement = createCard(entry);
    cardsContainer.append(cardElement);
});

function showPopup(form) {
    form.closest('.popup').classList.add('popup_opened');
}

function openAddCardPopup() {
    showPopup(popupAddCardForm);
}

function openEditPopup() {
    titleInput.value = title.textContent;
    nameInput.value = name.textContent;
    showPopup(popupEditForm);
}

function closePopup(e) {
    const currentPopup = e.currentTarget;
    currentPopup.closest('.popup').classList.remove('popup_opened');
}

function submitEditForm(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    title.textContent = titleInput.value;
    closePopup(evt);
}

function showImgPopup(e) {
    showPopup(popupImgForm);
    const popupImgFormData = popupImgForm.querySelector('.popup__img');
    popupImgFormData.src = e.src;
    popupImgFormData.alt = e.alt;
    popupImgForm.querySelector('.popup__img-name').textContent = e.alt;
}

function submitAddCardForm(e) {
    e.preventDefault();
    const newCard = {
      name: cardNameInput.value,
      link: cardImgInput.value
    };
    const cardElement = createCard(newCard);
    cardsContainer.prepend(cardElement);
    closePopup(e);
}

function deleteCard(e) {
  const currentCard = e.closest('.cards__item');
  currentCard.remove();
}

function likeCard(e) {
    e.classList.toggle('cards__like_active');
}

function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImg = cardElement.querySelector('.cards__image');
    cardElement.querySelector('.cards__title').textContent = card.name;
    cardImg.src = card.link;
    cardImg.alt = card.name;

    const likeButton = cardElement.querySelector('.cards__like');
    likeButton.addEventListener('click', function() { likeCard(likeButton)});

    const delButton = cardElement.querySelector('.cards__del');
    delButton.addEventListener('click', function() { deleteCard(delButton)});

    cardImg.addEventListener('click', function() { showImgPopup(cardImg) })

    return cardElement;
}

profileEditBtn.addEventListener('click', openEditPopup);
cardAddBtn.addEventListener('click', openAddCardPopup);
popupCloseBtns.forEach(function(popup) {
    popup.addEventListener('click', closePopup)
});
popupEditForm.addEventListener('submit', submitEditForm);
popupAddCardForm.addEventListener('submit', submitAddCardForm);