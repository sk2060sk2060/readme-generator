const axios = require("axios");

const api = {
  async getUser(username) {
    const queryURL = `https://api.github.com/users/${username}`;
    const res = await axios.get(queryURL)
    var avatarIcon = res.data.avatar_url + ".png?size=40";
    return avatarIcon;
  }
};

module.exports = api;
