const hljs = require('../../vendors/highlightjs/highlight.pack.js');

exports.identify_code = function(req, res) {
  const test = hljs.highlightAuto(req.body.code);
  let result={"language1":`${test.top.name}`,"relevance1":`${test.top.relevance}`,"language2":`${test.second_best.language}`,"relevance2":`${test.second_best.relevance}`};
  console.log(result);
  res.end(JSON.stringify(result));
};

