// ID를 통해 변수 정의
const todayDiv = document.querySelector('#today');
const timeDiv = document.querySelector('#time');

// 날짜와 시간 불러오는 함수 생성
function getTime() {
    let now = new Date();

    // 메서드 이용해 날짜와 시간 호출 (이때 getMonth는 0월부터 표시되므로 +1)
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // 요일 영어로 표시 추가
    let daynames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let day = daynames[now.getDay()];


    // 삼항연산자 사용하여 숫자가 두자리로 나오게끔 처리
    month = month < 10 ? `0${month}` : month;
    date = date < 10 ? `0${date}` : date;
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;


    // 템플릿 리터럴 이용하여 날짜와 시간 표시
    todayDiv.innerHTML = `${year} - ${month} - ${date} &nbsp;&nbsp; ${day}`;
    timeDiv.textContent = `${hour} : ${minute} : ${second}`;
}

// setInterval로 인해 페이지가 로드 된 후 1초간 시계 보이지 않는 현상 개선
getTime();

setInterval(getTime, 1000);


// 타이머 변수 정의
const half_counter = document.querySelector(".half_counter");
const full_counter = document.querySelector(".full_counter");
const half_start = document.querySelector("#btn_half_start");
const half_stop = document.querySelector("#btn_half_stop");
const half_reset = document.querySelector("#btn_half_reset");
const full_start = document.querySelector("#btn_full_start");
const full_stop = document.querySelector("#btn_full_stop");
const full_reset = document.querySelector("#btn_full_reset");


// 30분타이머
let count = 1800000;
let counter = half_counter;
let interval;

counter.textContent = "00:30:00";
half_start.addEventListener('click', ()=>{interval = setInterval(start, 1000)});
half_stop.addEventListener('click',(()=>{pause()}));
half_reset.addEventListener('click', ()=>{reset()});


function start() {
    if (count !== 0){
        count -= 1000 ; 
        let h = String(Math.floor(count/60/60/1000)); 
        let m = String(Math.floor(count/60/1000));
        let s = String(Math.floor(count/1000)%60);
        counter.textContent = `${h.padStart(2,'0')}:${m.padStart(2,'0')}:${s.padStart(2,'0')}`;
    } else {
        alert("TIME OUT!");
        clearInterval(interval);
    }
}

function pause (){
    clearInterval(interval);
}

function reset (){
    clearInterval(interval);
    counter.textContent = "00:30:00";
    count = 1800000;
} 



// 1시간 타이머
let fulltime = 3600000;

full_counter.textContent = "01:00:00";
full_start.addEventListener('click', ()=>{fullcountdown(full_counter, fulltime)});

function fullcountdown (counter, count){
    function start() {
        if (count !== 0){
            count -= 1000;
            let h = String(Math.floor(count/60/60/1000));
            let m = String(Math.floor(count/60/1000));
            let s = String(Math.floor(count/1000)%60);
            counter.textContent = `${h.padStart(2,'0')}:${m.padStart(2,'0')}:${s.padStart(2,'0')}`;
        } else {
            alert("TIME OUT!");
            clearInterval(interval);
        }
    }
    let interval = setInterval(start, 1000);
    
    full_stop.addEventListener('click',(()=>{pause()}));

    function pause (){
        fulltime = count;
        clearInterval(interval);
    }

    full_reset.addEventListener('click', ()=>{reset(full_counter)});
    
    function reset (){
        clearInterval(interval);
        counter.textContent = "01:00:00";
        fulltime = 3600000;
    } 
    
}