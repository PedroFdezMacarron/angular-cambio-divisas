import { Component, OnInit } from '@angular/core';
import { DivisasService } from 'src/app/shared/services/divisas.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.scss'],
})
export class DivisasComponent implements OnInit {
  amount: number = 1;

  constructor(private divisaService: DivisasService) {}

  ngOnInit(): void {
    this.divisaService.setAmount(1);
  }

  sendAmount() {
    this.divisaService.setAmount(this.amount);
    // this.divisaService.getObjeto();
  }
}

