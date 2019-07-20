import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DibItemComponent } from './dib-item/dib-item.component';

@NgModule({
  declarations: [DibItemComponent],
  imports: [
    CommonModule,
  ],
  exports: [
  	DibItemComponent
  ]
})
export class ComponentsModule { }
