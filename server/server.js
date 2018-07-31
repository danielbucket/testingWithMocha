const express = require('express');
const appServer = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 1234;

appServer.get('/', (req,res) => res.status(200).json());

appServer.listen(PORT, () => console.log(`appServer is running on port ${PORT}`));

module.exports = appServer;