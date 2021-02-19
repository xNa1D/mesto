export default class UserInfo{
    constructor({ nameSelector, titleSelector }) {
        this._currentName = document.querySelector(nameSelector);
        this._currentTitle = document.querySelector(titleSelector);
    }

    getUserInfo() {
        return {
            name: this._currentName.textContent,
            title: this._currentTitle.textContent
        }
    }

    setUserInfo({ name, title }) {
        this._currentName.textContent = name;
        this._currentTitle.textContent = title;
    }
}