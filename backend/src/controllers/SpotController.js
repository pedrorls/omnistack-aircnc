const User = require("../models/User");
const Spot = require("../models/Spot");

module.exports = {
  async index(request, response) {
    const { tech } = request.query;
    try {
      const spot = await Spot.find({ techs: tech });
      return response.json(spot);
    } catch (error) {
      return response.json({ error: error });
    }
  },

  async store(request, response) {
    const { company, price, techs } = request.body;
    const { filename } = request.file;
    const { user_id } = request.headers;

    user = await User.findById(user_id);

    if (!user) {
      return response.status(400).json({ error: "User does not exist" });
    }

    const spot = await Spot.create({
      company,
      price,
      techs: techs.split(",").map(spot => spot.trim()),
      thumbnail: filename,
      user: user_id
    });

    return response.json(spot);
  }
};
