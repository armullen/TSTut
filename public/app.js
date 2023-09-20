"use strict";
class Invoice {
    constructor(c, d, a) {
        this.form = document.querySelector('.new-item-form');
        this.type = document.querySelector('#type');
        this.tofrom = document.querySelector('#tofrom');
        this.details = document.querySelector('#details');
        this.amount = document.querySelector('#amount');
    }
    addEventListener() { }
}
(e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
};
