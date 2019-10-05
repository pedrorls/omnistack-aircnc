const User = require("../models/User");

module.exports = {
  async store(request, response) {
    const { email } = request.body;

    try {
      const user = await User.create({ email });
      return response.json(user);
    } catch (error) {
      return response.json({ error: error });
    }
  }
};
