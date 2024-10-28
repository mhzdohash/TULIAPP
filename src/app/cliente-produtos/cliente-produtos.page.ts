import { Component } from '@angular/core';

interface Produto {
  nome: string;
  imagem: string;
}

interface Categoria {
  nome: string;
  slideIndex: number;
  produtos: Produto[];
}

@Component({
  selector: 'app-cliente-produtos',
  templateUrl: './cliente-produtos.page.html',
  styleUrls: ['./cliente-produtos.page.scss'],
})
export class ClienteProdutosPage  {

  categorias: Categoria[] = [
    {
      nome: 'Cintas',
      slideIndex: 0,
      produtos: [
        { nome: 'Cinta Modeladora', imagem: 'assets/icon/cintamodeladora.jpg' },
        { nome: 'Cinta Pós-Cirúrgica', imagem: 'assets/icon/Colete-Pos-Cirurgico.jpg' },
        { nome: 'Cinta Abdômen', imagem: 'assets/icon/cintaabdomen.jpg' },
      ]
    },
    {
      nome: 'Pomadas',
      slideIndex: 0,
      produtos: [
        { nome: 'Pomada Cicatrizante', imagem: 'assets/icon/pomadacicatrizante.png' },
        { nome: 'Pomada Hidratante', imagem: 'assets/icon/cremehidratante.jpg' },
      ]
    }
  ];

  constructor() { }



  anterior(categoria: Categoria) {
    if (categoria.slideIndex > 0) {
      categoria.slideIndex--;
    } else {
      categoria.slideIndex = categoria.produtos.length - 1;
    }
  }

  proximo(categoria: Categoria) {
    if (categoria.slideIndex < categoria.produtos.length - 1) {
      categoria.slideIndex++;
    } else {
      categoria.slideIndex = 0;
    }
  }
}
