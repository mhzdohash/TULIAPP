import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheDiaPageRoutingModule } from './detalhe-dia-routing.module';

import { DetalheDiaPage } from './detalhe-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheDiaPageRoutingModule
  ],
  declarations: [DetalheDiaPage]
})
export class DetalheDiaPageModule {}
