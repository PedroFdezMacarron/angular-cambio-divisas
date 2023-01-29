import { DivisasService } from './../../../shared/services/divisas.service';
import { Component, OnInit, Input } from '@angular/core';
import {
  Amount,
  ObjetoDivisas,
} from './../../../shared/services/divisas.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
 
  miobjeto: ObjetoDivisas = this.divisasService.objetoDivisa;

  constructor(private divisasService: DivisasService) {}

  // miobjeto: ObjetoDivisas = {
  //   base: '',
  //   date: '',
  //   amount: 0,
  //   divisas: [],
  // };

 

  lares: any;  // la res puesta
  amount?: Amount; // para indicar el importe a convertir

  
  ngOnInit() {
    // console.log('oninit de gallery');

    // recuperar de servicio el amount
    // this.miobjeto = this.divisasService.objetoDivisa;
    this.amount = this.divisasService.objAmount;

    // se trae el dato de la url
    this.divisasService
      .getDivisas('https://api.vatcomply.com/rates?base=EUR')
      .subscribe((res: any) => {
        this.lares = res;
        // console.log('mostrar lares');
        // console.log(this.lares);

        // asignamos base y fecha y amount
        this.divisasService.setObjDivisas(this.lares);

        // recuperamos la información
        this.miobjeto = this.divisasService.getObjeto();
      });
  }

  otraDivisa(newDivisa: string) {
    // se trae el dato de la url
    this.divisasService
      .getDivisas('https://api.vatcomply.com/rates?base=' + newDivisa)
      .subscribe((res: any) => {
        this.lares = res;
        // console.log('mostrar lares');
        // console.log(this.lares);

        // asignamos base y fecha y amount
        this.divisasService.setObjDivisas(this.lares);
        this.miobjeto = this.divisasService.getObjeto();
      });
  }


}
