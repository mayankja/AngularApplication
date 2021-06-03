// // server.js
// const express = require('express');
// const app = express();

// // Run the app by serving the static files
// // in the dist directory
// app.use(express.static(__dirname + '/dist'));

// const forceSSL = function() {
//     return function (req, res, next) {
//       if (req.headers['x-forwarded-proto'] !== 'https') {
//         return res.redirect(
//          ['https://', req.get('Host'), req.url].join('')
//         );
//       }
//       next();
//     }
// }

// app.use(forceSSL());

// // Start the app by listening on the default
// // Heroku port
// app.listen(process.env.PORT || 8080);

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/ang-assignment'));

// app.use(requireHTTPS);
// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     console.log('++++++++++', req)
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         console.log('-----------', 'https://' + req.get('host') + req.url);
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/ang-assignment/index.html'));
});

console.log('this is the port', process.env.PORT || 8000);
app.listen(process.env.PORT || 8080);

