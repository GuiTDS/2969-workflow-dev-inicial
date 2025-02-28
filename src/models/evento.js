/* eslint-disable camelcase */
// import db from '../db/dbconfig.js';

class Evento {
  constructor({
    id,
    nome,
    descricao,
    data,
    autor_id,
    created_at,
    updated_at,
  }) {
    this.id = id || null;
    this.nome = nome;
    this.descricao = descricao;
    this.data = data;
    this.autor_id = autor_id;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }

  static async pegarEventos() {
    return [{
      id: 1,
      nome: 'Evento Teste',
      descricao: 'Descrição teste',
      data: '2023-01-01',
      autor_id: 1,
      created_at: '2023-01-01 08:00:00',
      updated_at: '2023-01-01 08:00:00',
    }, {
      id: 2,
      nome: 'Evento Teste 2',
      descricao: 'Descrição teste',
      data: '2023-01-01',
      autor_id: 1,
      created_at: '2023-01-01 08:00:00',
      updated_at: '2023-01-01 08:00:00',
    }];
  }
}

export default Evento;
