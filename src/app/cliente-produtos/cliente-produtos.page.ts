import { Component, OnInit } from '@angular/core';

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
export class ClienteProdutosPage implements OnInit {

  categorias: Categoria[] = [
    {
      nome: 'Cintas',
      slideIndex: 0,
      produtos: [
        { nome: 'Cinta Modeladora', imagem: 'assets/produtos/cinta1.jpg' },
        { nome: 'Cinta Pós-Cirúrgica', imagem: 'assets/produtos/cinta2.jpg' },
        { nome: 'Cinta Abdômen', imagem: 'assets/produtos/cinta3.jpg' },
      ]
    },
    {
      nome: 'Pomadas',
      slideIndex: 0,
      produtos: [
        { nome: 'Pomada Cicatrizante', imagem: 'assets/produtos/pomada1.jpg' },
        { nome: 'Pomada Hidratante', imagem: 'assets/produtos/pomada2.jpg' },
      ]
    }
  ];

  constructor() { }

  ngOnInit() { }

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