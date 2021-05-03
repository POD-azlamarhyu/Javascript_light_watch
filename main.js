const selectimg = (hour) => {
    let img;
    if (hour >= 5 && hour < 11){
        img = "./images/time1_asa.png";
    }else if (hour >= 11 && hour < 16){
        img = "./images/time2_hiru.png";
    }else if (hour >= 16 && hour < 20){
        img = "./images/time3_yuu.png";
    }else{
        img = "./images/city_night_yoruno_machi.png";
    }
    return img;
}

const textmsg = (hour) => {
    let msg;
    if (hour >= 5 && hour < 11){
        msg = "Good Moning";
    }else if (hour >= 11 && hour < 16){
        msg = "Good afternoon";
    }else if (hour >= 16 && hour < 20){
        msg = "Good evening";
    }else{
        msg = "Good night";
    }
    return msg;   
}

const clockapp = () => {


    const weeks=["月曜日","火曜日","水曜日","木曜日","金曜日","土曜日","日曜日"];
    const num=10;
    let img;

    let time = new Date();
    let year=time.getFullYear();
    let month=time.getMonth();
    let days=time.getDate();
    let week=time.getDay();
    let hour=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();

    img = selectimg(hour);
    msg = textmsg(hour);

    if (hour < num){
        hour = "0" + hour;
    }
    if (month < num){
        month="0"+month;
    }
    if (minute < num){
        minute="0"+minute;
    }
    if (second < num){
        second = "0" +second;
    }

    const $dom = document;
    const $days = $dom.getElementById('js-days');
    const $time = $dom.getElementById('js-time');
    const $img = $dom.getElementById('js-img');

    $img.src=img;
    $img.innerText = msg;


    let day=`${year}年 ${month}月 ${days}日  ${weeks[week]}`;
    let times = `${hour} : ${minute} : ${second}`;

    $days.innerText = day;
    $time.innerText = times;

    // console.log(day);
    // console.log(times);
    // console.log($days);
    // console.log($time);
}
setInterval(clockapp,1000);