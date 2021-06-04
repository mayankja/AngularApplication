const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/Ang-Assignment'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/Ang-Assignment/index.html'));
});

console.log('this is the port', process.env.PORT || 8000);
app.listen(process.env.PORT || 8080);

