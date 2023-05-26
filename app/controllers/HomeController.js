const PixController = require('../controllers/PixController');

class HomeController {
  index(req, res) {
    res.render('home/index');
  }

  processForm(req, res) {
    const { pixKey, pixValue } = req.body;
    console.log(res.status)
    const pixData = { key: pixKey, value: pixValue };
  
    PixController.create(pixData);
  
    res.redirect('/success');
  }

  success(req, res) {
    res.render('home/success', { message: 'PIX enviado com sucesso!' });
  }
}

module.exports = new HomeController();
