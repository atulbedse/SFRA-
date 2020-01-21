
'use strict';

var server = require('server');    //the server module is used by all controllers
var cache = require('*/cartridge/scripts/middleware/cache');

server.get('Bask', cache.applyDefaultCache, function (req, res, next) {  //registers the Show route for the Home module
	
    next();           
});

module.exports = server.exports();