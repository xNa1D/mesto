export default class Section {
    constructor({ items , renderer }, containerSelector) {
        this._itemsArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._itemsArray.forEach(item => {
            this._renderer(item);
        });
    }

    addItem(item) {
        this._container.prepend(item);
    }
}