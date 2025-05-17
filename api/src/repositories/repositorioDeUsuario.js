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
}

module.exports = new RepositorioDeUsuario();
