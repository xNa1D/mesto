export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector).closest('.popup');
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            const { target } = evt;
            if (target.classList.contains('popup') || target.classList.contains('popup__close')) {
                this.close();
            };
        })
    }
}