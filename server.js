const path = require('path');
const express = require('express');
const favicon = require('express-favicon');
const publicPath = path.join(__dirname, 'build')
const port = process.env.PORT || 8080;
const app = express();

app.use(favicon(publicPath + '/favicon.ico'));
// the __dirname is the current directory from where the  is running
app.use(express.static(__dirname));
app.use(express.static(publicPath));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});