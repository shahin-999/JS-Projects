console.dir('hello');
const bDay = "16 October 2021" ;

//function coundown(){
    const bDay = new Date(bDay);
    const day = new Date();
    const dayRemain = (bDay-day)/1000;
    console.log(dayRemain);
document.getElementById('day').innerHTML = dayRemain;

