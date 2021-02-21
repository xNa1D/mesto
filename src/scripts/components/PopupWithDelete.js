import Popup from './Popup.js';

export default class PopupWithDelete extends Popup{
    constructor({popupSelector, handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
    }

    open(data) {
        this._id = data._id;
        super.open();
    }
}