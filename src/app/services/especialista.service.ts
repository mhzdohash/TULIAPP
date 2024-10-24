import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EspecialistaService {
  private especialista = {
    nome: 'Dr Amanda Oliveira',
    descricao: 'Sou uma médica especializada em dermatologia e estética facial, com mais de 10 anos de experiência...',
    genero: 'Feminino',
    fotoPerfil: '../assets/icon/Foto-doutora-Ana-Elisa.jpg',
    fotoFundo: './assets/icon/background.jpeg',
    procedimentos: [
      { titulo: 'Preenchimento Facial', descricao: 'Utilizo essa técnica para restaurar o volume facial perdido...' },
      { titulo: 'Toxina Botulínica (Botox)', descricao: 'Com expertise em aplicação de toxina botulínica...' },
      { titulo: 'Bioestimuladores de Colágeno', descricao: 'Focada em procedimentos que estimulam a produção de colágeno...' },
    ],
  };

  // Retorna os dados do especialista
  getPerfil() {
    return this.especialista;
  }

  // Método para atualizar o perfil
  atualizarPerfil(dados: any) {
    this.especialista = { ...this.especialista, ...dados };
  }

  // Método para adicionar um novo procedimento
  adicionarProcedimento(procedimento: { titulo: string; descricao: string }) {
    this.especialista.procedimentos.push(procedimento);
  }

  // Método para remover um procedimento pelo índice
  removerProcedimento(index: number) {
    this.especialista.procedimentos.splice(index, 1);
  }

  // Método para editar um procedimento existente
  editarProcedimento(index: number, novoProcedimento: { titulo: string; descricao: string }) {
    this.especialista.procedimentos[index] = novoProcedimento;
  }

  // Método para salvar todas as mudanças no perfil
  salvarAlteracoes(dados: any) {
    this.atualizarPerfil(dados);
  }
}
