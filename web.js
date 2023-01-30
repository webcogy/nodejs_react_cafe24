const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const PORT = 8001

// CORS 이슈 해결
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (res, req) => {
  req.sendFile(path.join(__dirname, '/build/index.html'));
});

/* 리액트에서 라우팅 설정한 파일 읽도록 설정 */
app.get('*', (res, req) => {
  req.sendFile(path.join(__dirname, '/build/index.html'));
});

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});