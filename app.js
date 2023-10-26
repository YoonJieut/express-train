const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;  
// Node.js의 내장 모듈로 파일을 다룹니다.


const app = express();

// bodyParser를 사용하여 URL encoded form 데이터를 파싱합니다.
app.use(bodyParser.urlencoded({ extended: true }));

// 정적 파일을 제공하기 위해 express.static 미들웨어를 사용합니다.
app.use(express.static('public'));


// 메인 페이지 라우트
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});