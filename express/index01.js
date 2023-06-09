const express = require('express');
// const cors = require('cors');
const app = express();
const port = 4000;

// index.js의 express 서버와 통신 -> cors 를 허용했기 때문에 접근가능
app.get('/api', ( req ,res ) => {
    //3000번의 dog path를 보내서 dog의 sound를 받는다.
    fetch('http://localhost:3000/sound/dog')
    .then( res => res.json() )
    .then( data => {
        console.log(data); //멍멍
        res.send( data );
    });

});

app.listen(port , () => {
    console.log(`Example apprunning on port ${port}`);
});