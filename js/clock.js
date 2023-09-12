const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // js 실행시 즉기 실행해줌
setInterval(getClock, 1000); //주어진 함수는 1초마다 반복 호출한다. (시간 업데이트됨)
