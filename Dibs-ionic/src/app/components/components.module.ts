import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DibItemComponent } from './dib-item/dib-item.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DibItemComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
  	DibItemComponent
  ]
})
export class ComponentsModule { }
