import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialistaCalendarioPageRoutingModule } from './especialista-calendario-routing.module';

import { EspecialistaCalendarioPage } from './especialista-calendario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialistaCalendarioPageRoutingModule
  ],
  declarations: [EspecialistaCalendarioPage]
})
export class EspecialistaCalendarioPageModule {}
