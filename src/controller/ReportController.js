const { Op } = require("sequelize");
const User = require("../model/User");

module.exports = {
  async show(req, res) {
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@zencompany.com.br"
        }
      },
      include: [
        {
          association: "addresses",
          attributes: ["street", "zipcode"],
          where: { street: "Rua Celeste Grande" }
        }, // enderecos
        {
          required: false,
          association: "techs",
          attributes: ["name"],
          through: { attributes: [] }
          //where: { name: { [Op.iLike]: "%Node.js%" } }
        }
      ]
    });
    return res.json(users);
  }
};
