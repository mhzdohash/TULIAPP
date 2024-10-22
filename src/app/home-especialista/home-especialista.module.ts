import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeEspecialistaPageRoutingModule } from './home-especialista-routing.module';

import { HomeEspecialistaPage } from './home-especialista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEspecialistaPageRoutingModule
  ],
  declarations: [HomeEspecialistaPage]
})
export class HomeEspecialistaPageModule {}
