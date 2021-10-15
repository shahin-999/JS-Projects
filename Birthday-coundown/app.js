const bDay = "16 October 2021" ;

function coundown(){
    const birthday = new Date(bDay);
    const date = new Date();
    const dayRemain = (birthday-date)/1000;
    let day = Math.floor(dayRemain/3600/24);
    let hour = Math.floor((dayRemain/3600)%24);
    let min = Math.floor((dayRemain/60)%60);
    let sec = Math.floor((dayRemain%60));
    //let day = 0, hour = 0, min = 0, sec =0;


    if(day <= 0 && hour <= 0 && min <= 0 && sec <= 0){
        clearInterval(cd);
        let myVar = document.getElementById('myDiv');
        myVar.style.display = 'none';
        document.getElementById('wish-massage').style.display = 'flex'
    }

    day = format(day);
    hour = format(hour);
    min = format(min);
    sec = format(sec);
    
    document.getElementById('day').innerHTML = day;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;

    
}

let cd = setInterval(coundown,1000);

function format(data){
    if(data<10){
        data = '0' + data;
    }
    return data;
}
