const moment = require("moment");

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter("niceDate", function (value) {
    return moment(value).format("MMM Do YYYY");
  });
};
