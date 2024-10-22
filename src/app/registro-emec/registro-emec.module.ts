import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroEmecPageRoutingModule } from './registro-emec-routing.module';

import { RegistroEmecPage } from './registro-emec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroEmecPageRoutingModule
  ],
  declarations: [RegistroEmecPage]
})
export class RegistroEmecPageModule {}
