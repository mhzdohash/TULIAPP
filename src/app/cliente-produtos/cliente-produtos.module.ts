import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClienteProdutosPageRoutingModule } from './cliente-produtos-routing.module';
import { ClienteProdutosPage } from './cliente-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteProdutosPageRoutingModule,
  ],
  declarations: [ClienteProdutosPage]
})
export class ClienteProdutosPageModule {}