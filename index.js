const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));

//Run web server for application on a designated port. Currently set up to work on localhost.
app.listen(port, () => console.log(`Google Books Search App listening on port ${port}!`));