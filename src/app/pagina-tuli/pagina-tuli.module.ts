import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaTuliPageRoutingModule } from './pagina-tuli-routing.module';

import { PaginaTuliPage } from './pagina-tuli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaTuliPageRoutingModule
  ],
  declarations: [PaginaTuliPage]
})
export class PaginaTuliPageModule {}
