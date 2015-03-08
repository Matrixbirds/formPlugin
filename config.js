var path = require('path');
var config = {

	debug: true,

	view_engine: 'ejs',

	views_dir: path.join(__dirname, '.'),


};

module.exports = config;