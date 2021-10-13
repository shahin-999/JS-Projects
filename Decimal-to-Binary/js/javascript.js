const button = document.getElementById('submit');
const input = document.getElementById('number');
const result = document.getElementById('result');

button.addEventListener("click", (x)=>{
    x.preventDefault();
    let num = input.value;
    if(num == ''){
        alert("Please Enter a input");
    }else if(num<0){
        alert("Enter positive number");
    }
    else{
        num =Number(num).toString(2);
    }
    result.innerHTML = num;
})