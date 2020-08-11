import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyMeCofeeComponent } from './buy-me-cofee.component';



@NgModule({
  declarations: [BuyMeCofeeComponent],
  imports: [
    CommonModule
  ],
  exports: [BuyMeCofeeComponent]
})
export class BuyMeCofeeModule { }
