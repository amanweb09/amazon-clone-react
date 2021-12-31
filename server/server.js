const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./database/connection')();

app.use(require('./router/routes'));

app.listen(PORT, () => {
    console.log('listening on port 5000!')
})