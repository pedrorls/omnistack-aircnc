const User = require("../models/User");

module.exports = {
  async store(request, response) {
    const { email } = request.body;
    let user;
    try {
      user = await User.findOne({ email });
      if (!user) {
        user = await User.create({ email });
      }
      return response.json(user);
    } catch (error) {
      return response.json({ error: error });
    }
  }
};
