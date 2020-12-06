let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let name = document.querySelector('.profile-info__name');
let title = document.querySelector('.profile-info__title');
let popupEditSaveButton = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input-text-name');

function openEditPopup() {
    document.querySelector('.popup__input-text-title').value = title.innerText;
    document.querySelector('.popup__input-text-name').value = name.innerText;
    popup.classList.add('popup_opened');
}

function closeEditPopup() {
    popup.classList.remove('popup_opened');
}

function formEditSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector('.popup__input-text-name').value;
    let titleInput = document.querySelector('.popup__input-text-title').value;
    name.textContent = nameInput;
    title.textContent = titleInput;
    closeEditPopup();
}

profileEditButton.addEventListener('click', openEditPopup);
popupCloseButton.addEventListener('click', closeEditPopup);
popupEditSaveButton.addEventListener('submit', formEditSubmit);