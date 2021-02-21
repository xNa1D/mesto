export default class UserInfo{
    constructor({ nameSelector, aboutSelector, avatarSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._aboutElement = document.querySelector(aboutSelector);
        this._avatarElement = document.querySelector(avatarSelector);
        this._name = '';
        this._about = '';
        this._avatar = '';
        this._id = '';
    }

    getUserInfo() {
        return {
            name: this._name,
            about: this._about,
            userAvatar: this._avatar
        }
    }

    updateUserInfo() {
        this._nameElement.textContent = this._name;
        this._aboutElement.textContent = this._about;
        this._avatarElement.src = this._avatar;
    }

    setUserInfo({ name, about, avatar, _id }) {
        this._name = name;
        this._about = about;
        this._avatar = avatar;
        this._id = _id;
    }

    getMyId() {
        return this._id;
    }
}