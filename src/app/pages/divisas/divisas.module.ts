import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisasRoutingModule } from './divisas-routing.module';
import { DivisasComponent } from './divisas.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DivisasComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    DivisasRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DivisasModule { }
