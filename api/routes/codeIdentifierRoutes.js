'use strict';
module.exports = function(app) {
  var codeIdentifier = require('../controllers/codeIdentifierController');

  app.route('/identify_code')
    .post(codeIdentifier.identify_code);
};
