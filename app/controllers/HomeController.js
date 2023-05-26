const PixController = require('../controllers/PixController');

class HomeController {
  index(req, res) {
    res.render('/home/index');
  }

  processForm(req, res) {
    const { pixKey, pixValue } = req.body;

    // Cria um novo Pix
    const pix = {
      key: pixKey,
      value: pixValue,
    };

    // adicionar o Pix ao db atraves do controller
    PixController.create(pix);

    res.redirect('/success');
  }

  success(req, res) {
    res.render('home/success', { message: 'PIX enviado com sucesso!' });
  }
}

module.exports = new HomeController();
