const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


//서버에 모든 접근을 허용한다.
app.use( cors() );

app.get('/' ,(req ,res) => {
    res.send('<div style="color:red;">Hello World</div>');
});

app.get('/sound/:name' ,(req ,res) => {
    // '/sound/:name' -> :name = pathVariable -> request.params 안에 정보가 담겨있다.
    const sounds = {
         dog : '멍멍'
        ,cat : '야옹'
        ,pig : '꿀꿀'
    }
    res.json({sound: sounds[req.params.name] ?? '없음'});
})

//server 실행
app.listen(port , () => {
    console.log(`Example apprunning on port ${port}`);
});