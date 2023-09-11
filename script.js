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