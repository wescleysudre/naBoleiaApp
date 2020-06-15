const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/naBoleiaApp'));

app.get('*', function (req, res) {

  res.sendFile(path.join(__dirname + '/dist/naBoleiaApp/index.html'));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);
