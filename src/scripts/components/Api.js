export default class Api {
    constructor({url, headers, groupeId}) {
      this._url = url;
      this._headers = headers;
      this._groupeId = groupeId;
    }

    getAllInfo() {
      return Promise.all([this.getUserData(), this.getInitialCards()])
    }
  
    getUserData() {
        return fetch(`${this._url}/${this._groupeId}/users/me`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    getInitialCards() {
        return fetch(`${this._url}/${this._groupeId}/cards`, {
          headers: this._headers
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          });
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
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        });
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
}

deleteCard(cardId) {
  return fetch(`${this._url}/${this._groupeId}/cards/${cardId}`, {
    method: 'DELETE',
    headers: this._headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

addLikeCard(cardId) {
  return fetch(`${this._url}/${this._groupeId}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: this._headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

removeLikeCard(cardId) {
  return fetch(`${this._url}/${this._groupeId}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: this._headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

updateAvatar(avatarLink) {
  return fetch(`${this._url}/${this._groupeId}/users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar: avatarLink
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

}