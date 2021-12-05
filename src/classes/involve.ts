import { HasOwn } from "../interfaces/HasOwn.js";


export class Invoice implements HasOwn{
    client: string; 
    details: string; 
    amount: number; 

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format (){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}