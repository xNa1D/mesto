let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let popupCloseButton = document.querySelector('.popup__close');
let name = document.querySelector('.profile-info__name');
let title = document.querySelector('.profile-info__title');
let nameInput = document.getElementsByName('profile-edit-name')[0];
let titleInput = document.getElementsByName('profile-edit-title')[0];

function openEditPopup() {
    titleInput.value = title.textContent;
    nameInput.value = name.textContent;
    popup.classList.add('popup_opened');
}

function closeEditPopup() {
    popup.classList.remove('popup_opened');
}

function formEditSubmit(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    title.textContent = titleInput.value;
    closeEditPopup();
}

profileEditButton.addEventListener('click', openEditPopup);
popupCloseButton.addEventListener('click', closeEditPopup);
popupForm.addEventListener('submit', formEditSubmit);