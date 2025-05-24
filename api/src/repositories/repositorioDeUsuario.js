const { Usuario } = require("../models/Usuario");

class RepositorioDeUsuario {
  buscarTodos() {
    return Usuario.buscarTodos();
  }

  criar(usuario) {
    return usuario.salvar();
  }
  
  buscarPeloID(id) {
    return Usuario.buscarPeloID(id)
  } 

  buscarPeloEmail(email) {
    return Usuario.buscarPeloEmail(email);
  }

  atualizar (id, dadosNovos) {
    return Usuario.atualizar(id, dadosNovos)
  }

  deletar (id) {
    return Usuario.deletarUmUsuario(id)
  }
}

module.exports = new RepositorioDeUsuario();
