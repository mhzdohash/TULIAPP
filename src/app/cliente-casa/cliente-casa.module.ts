import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteCasaPageRoutingModule } from './cliente-casa-routing.module';

import { ClienteCasaPage } from './cliente-casa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteCasaPageRoutingModule
  ],
  declarations: [ClienteCasaPage]
})
export class ClienteCasaPageModule {}
