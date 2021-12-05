import { Invoice } from "./classes/involve.js";
import { ListTamplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/Payments.js";
import { HasOwn } from "./interfaces/HasOwn.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!
const list = new ListTamplate(ul);

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault()
    let doc: HasOwn;

    let value: [string, string, number];
    value = [toForm.value, details.value, amount.valueAsNumber]

    if(type.value === "invocie"){
        doc = new Invoice(...value)
    } else{
        doc = new Payments(...value)
    }
    list.render(doc, type.value, 'end')
})