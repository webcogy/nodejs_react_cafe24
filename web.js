const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const PORT = 8001

// CORS 이슈 해결
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '/views')));

app.get('/', (res, req) => {
  req.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('*', (res, req) => {
  req.sendFile(path.join(__dirname, '/views/index.html'));
});

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});