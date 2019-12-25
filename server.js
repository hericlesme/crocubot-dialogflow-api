require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const processMessage = require('./process-message');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post((process.env.ENDPOINT || '/chat'), async (req, res) => {
  const { message } = req.body;
  let response = await processMessage(message);
  res.send(response);
});

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Crocubot API Running → PORT ${server.address().port}`);
})