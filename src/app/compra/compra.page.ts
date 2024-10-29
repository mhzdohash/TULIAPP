import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  produtoNome: string = '';
  produtoPreco: string = '';
  produtoImagem: string = '';
  produtoDescricao: string = '';

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
    this.produtoNome = this.route.snapshot.paramMap.get('nome') || 'Cinta modeladora';
    this.produtoPreco = this.route.snapshot.paramMap.get('preco') || '139,90';
    this.produtoImagem = this.route.snapshot.paramMap.get('imagem') || 'assets/icon/cintamodeladora.jpg';
    this.produtoDescricao = this.route.snapshot.paramMap.get('descricao') || 'Cinta modeladora feita para definir e realçar a silhueta, proporcionando compressão confortável e suporte. Ideal para uso diário, auxilia na postura e oferece um ajuste anatômico que valoriza as curvas naturais, sem comprometer o bem-estar.';
  }

  goBack() {
    this.navCtrl.back();
  }
}
