const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  prefix: {
    "type": String,
    "default": defaults.prefix
  },
  expsysteme:{
    "type": Boolean,
    "default": false
  },
  rankcard :{
    "type": String,
    "default": defaults.rankcard
  },
  salonranks :{
    "type": String,
    "default": ""
  },

});

module.exports = mongoose.model("Guild", guildSchema);
