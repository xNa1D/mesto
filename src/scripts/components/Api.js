export default class Api {
  constructor({ url, headers, groupeId }) {
    this._url = url;
    this._headers = headers;
    this._groupeId = groupeId;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getAllInfo() {
    return Promise.all([this.getUserData(), this.getInitialCards()])
  }

  getUserData() {
    return fetch(`${this._url}/${this._groupeId}/users/me`, {
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._url}/${this._groupeId}/cards`, {
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  updateUserData(newName, newAbout) {
    return fetch(`${this._url}/${this._groupeId}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: newName,
        about: newAbout
      })
    })
      .then(this._checkResponse);
  }

  addNewCard(cardName, cardLink) {
    return fetch(`${this._url}/${this._groupeId}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink
      })
    })
      .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/${this._groupeId}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  addLikeCard(cardId) {
    return fetch(`${this._url}/${this._groupeId}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  removeLikeCard(cardId) {
    return fetch(`${this._url}/${this._groupeId}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  updateAvatar(avatarLink) {
    return fetch(`${this._url}/${this._groupeId}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
      .then(this._checkResponse);
  }

}