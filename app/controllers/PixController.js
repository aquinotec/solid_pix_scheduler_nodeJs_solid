const Pix = require('../models/Pix');
const Database = require('../models/Database');

class PixController {
  create(req, res) {
    const { value, key } = req;

    const pix = new Pix(key, value);

    // Adiciona o Pix ao db
    Database.addPix(pix);
    //console.log(res)
    //adicionar validação para retorno quando houver requisição futura
    
    //res.status(200).json({ message: 'Pix criado com sucesso!' });
  }

/*
  show(req, res) {
    const { pixId } = req.params;

    const pix = Database.getPixById(pixId);

    if (!pix) {
      res.status(404).json({ error: 'Pix não encontrado!' });
    } else {
      // Retorna os detalhes do Pix. Implementação futura
      res.status(200).json(pix);
    }
  }*/

  // Outros métodos
}

module.exports = new PixController();
