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

// POST 요청 처리
app.post('/submit', async (req, res) => {
  const url = req.body.url;

  // 외부 placeholder와 같은 주소를 가져옵니다. (이 예제에서는 가져오는 코드는 생략되었습니다.)
  
  // asset 폴더에 정보 저장
  const data = {
      lastSubmittedURL: url,
      timestamp: new Date().toISOString()
  };
  
  await fs.writeFile('./asset/data.json', JSON.stringify(data, null, 2));

  res.redirect('/result.html');  
  // 사용자를 결과 페이지로 리디렉션합니다.
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});