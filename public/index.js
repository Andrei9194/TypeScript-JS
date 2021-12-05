import { Invoice } from "./classes/involve.js";
import { ListTamplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/Payments.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toForm = document.querySelector('#toform');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTamplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let value;
    value = [toForm.value, details.value, amount.valueAsNumber];
    if (type.value === "invocie") {
        doc = new Invoice(...value);
    }
    else {
        doc = new Payments(...value);
    }
    list.render(doc, type.value, 'end');
});
