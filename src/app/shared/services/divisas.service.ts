import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DivisasService {
  url = 'https://api.vatcomply.com/rates?base=EUR';

  //objeto amount
  objAmount: Amount = { value: 1 };

  // objeto completo con todo.
  arrayDivisas?: Divisa[] = [];

  objetoDivisa: ObjetoDivisas = {
    base: '-x-',
    date: '',
    amount: 1,
    divisas: ([] = []),
  };

  divisa: string = 'EUR';
  amount: number = 1;
  lares: any;

  constructor(private httpClient1: HttpClient) {}



  getObjeto() {
    return this.objetoDivisa;
  }

  setObjDivisas(lares: any) {
    // console.log('set Objdivisas 2');
    // console.log(lares);

    // asignamos base y fecha y amount y limpiamos array
    this.objetoDivisa = {
      date: lares.date,
      base: lares.base,
      amount: this.objAmount.value,
      divisas: [],
    };

    // console.log('cargamos array', lares.rates);

    // cargamos el array
    for (const key in lares.rates) {
      this.objetoDivisa.divisas.push({
        divisa: key,
        rate: lares.rates[key],
        change: lares.rates[key] * this.objetoDivisa.amount,
      });
    }
    // console.log(this.objetoDivisa.divisas);
  }

  getDivisas(url: string) {
    // console.log('get', url);
    this.setObjDivisas(this.httpClient1.get(url));

    return this.httpClient1.get(url);
  }

  setAmount(value: number) {
    this.objAmount.value = value;
    this.objetoDivisa.amount = value;

    // recalculamos el array
    this.objetoDivisa.divisas.forEach((element) => {
      element.change = element.rate * value;
    });
  }

  getAmount() {
    return this.objAmount.value;
  }
}

export interface Divisa {
  divisa: string;
  rate: number;
  change: number;
}

export interface ObjetoDivisas {
  date: string;
  base: string;
  amount: number;
  divisas: Divisa[];
}

export interface Amount {
  value: number;
}
