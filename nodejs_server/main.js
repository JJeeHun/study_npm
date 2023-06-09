const http  = require('http');
const fs    = require('fs');
const url   = require('url');
const port  = 3000;

// 서버 생성
const CreateServer = (http) => {
    const paths = {get:{} ,post:{}}; //맵핑용 path 객체

    //default header
    const setDefaultHeader = res => {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    }

    //server create
    const app = http.createServer(( req ,res ) => {
        const _url = url.parse(req.url ,true);
        let url_path = _url.pathname;
        const queryData = _url.query;
        
        //default header 적용
        setDefaultHeader(res);

        //paths에 등록 된 함수를 찾음
        const findFunction = paths[req.method.toLocaleLowerCase()][url_path];
        
        //함수가 있는지 확인 후 있으면 실행
        if( findFunction ) return findFunction(req ,res);
            
        //없을 경우 not found
        res.writeHead(404).end('Not Found');
    });

    //path 등록 객체 추가
    app.get = ( path ,callback ) => { paths.get[path] = callback };
    app.post = ( path ,callback ) => { paths.post[path] = callback };    

    //서버 객체 return
    return app;
}

//서버 생성
const router = CreateServer( http );

//router 등록
router.get( '/test' ,(req ,res) => {
    res.writeHead(200).end('{method:"GET"}');
});
//router 등록
router.post( '/test' ,(req ,res) => {
    res.writeHead(200).end('{"method":"POST"}');
});

//서버 실행
router.listen(port);