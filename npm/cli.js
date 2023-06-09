#!/usr/bin/env node
// #!/usr/bin/env node -> OS 한테 node로 실행하라는 명령어
const greeting = require('./main');

/**
 * process.argv
 * node 로 실행한 파일의 정보를 넘겨 받는 Ojbect
 * [0] = node 가 설치되어있는 경로
 * [1] = node로 실행한 파일의 경로
 * [2] = 2 이후는 추가로 넣어주는 값이 들어온다.
 */
console.log( greeting[ process.argv[2] ] );

/*
    terminal 계열 권한 명령어
    ls -al cli.js
 */



/**
 * npm 에서 cli 등록 방법
 * 
 * @ex node_modules/@egoing/package.json 참조
 * 
 * 1. package.json의 bin 에 명령어 설정
 * 2. "say-hi":"./cli.js", "say-hi-kr":"./cli-kr.js" -> say-hi를 실행시 './cli.js'를 실행
 * 3. 로컬 모듈의 명령어 실행 방법 -> node_modules/.bin/say-hi 를 통해 실행
 * 4. 글로벌로 등록시 해당 모듈을 글로벌 설치를 해서 글로벌 영역에 등록한다.
 */