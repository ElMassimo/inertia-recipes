const { environment } = require("@rails/webpacker");
const customConfig = require("./custom");

environment.config.merge(customConfig);