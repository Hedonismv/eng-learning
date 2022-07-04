const userService = require('../service/user-service');

class UserController {
    async registration (req, res, next){
      try {
        const {email, password} = req.body;
        console.log(email, password);
        const userData = await userService.registration(email, password);

        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

        return res.json(userData)
      }catch (e) {
        return res.json(e.message)
      }
    }

  async login (req, res, next){
    try {

    }catch (e) {

    }
  }

  async logout (req, res, next){
    try {

    }catch (e) {

    }
  }

  async activation (req, res, next){
    try {

    }catch (e) {

    }
  }

  async refresh (req, res, next){
    try {

    }catch (e) {

    }
  }
}


module.exports = new UserController()