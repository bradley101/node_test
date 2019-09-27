const app = require('express')();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(1234, () => {
    console.log('Server started')
});