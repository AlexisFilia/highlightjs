const express = require('express')
const app = express();
const port = app.listen(process.env.PORT || 3000);
const bodyParser = require('body-parser');
const routes = require('./api/routes/codeIdentifierRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
routes(app);

app.get('/', (req, res) => {
  res.send(`Hello World! ${req.params}`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
