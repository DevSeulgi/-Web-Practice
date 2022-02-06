// console.log(new Date());

// const fullDate = new Date();
    // we don't wanna fullDate. just hour.min.sec
    // console.log(fullDate.getHours());
    // console.log(fullDate.getMinutes());
    // console.log(fullDate.getSeconds());
// const hours = fullDate.getHours();
// const mins = fullDate.getMinutes();
// const secs = fullDate.getSeconds();

    // console.log(document.getElementById('clock'));
    // 좌항에 속한 HTML 안의 id를 = 우항의 hours, mins, secs로 대체한다.
// document.getElementById('hour').innerHTML = hours;
// document.getElementById('minute').innerHTML = mins;
// document.getElementById('second').innerHTML = secs;

// SET_INTERVAL에 대한 설명
    // function greeting() {
    //     console.log("hello");
    // }
    // setInterval(greeting, 1000);

function clock() {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ": " + mins;
    document.getElementById('second').innerHTML = ": " + secs;
}

setInterval(clock, 100);