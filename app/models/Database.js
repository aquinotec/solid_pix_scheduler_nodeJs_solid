// models/Database.js

class Database {
  addPix(pixData) {
    //tentar aplicar o CQRS no futuro
    console.log('Adicionando PIX ao banco de dados:', pixData);
  }

  // Outros métodos
}

module.exports = new Database();
