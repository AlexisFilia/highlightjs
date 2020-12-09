'use strict';
module.exports = function(app) {
  var codeIdentifier = require('../controllers/codeIdentifierController');

  // codeIdentifier Routes

  // app.route('/codes_identified')
  //   .get(codeIdentifier.codes_identified);

  app.route('/identify_code')
    .post(codeIdentifier.identify_code);
};
