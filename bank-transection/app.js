// bank transection

// catch the div and login button

var loginDiv = document.getElementById("div-1");
var bankDiv = document.getElementById("bank-main-div");
var loginBtn = document.getElementById("login-btn");
var title = document.getElementById("title")

//click event for hide login part
loginBtn.addEventListener("click",(e)=>{  
    e.preventDefault();
    loginDiv.style.display = "none";
    title.innerHTML = "Bank of No Security"
    bankDiv.style.display = "flex";    
})

// money claculation start here
// find diposit, withdraw, balance amount
var dipositAmount = parseFloat(document.querySelector("#diposit-amount").innerText);
var withdrawAmount = parseFloat(document.querySelector("#withdraw-amount").innerText);
var balanceAmount = parseFloat(document.querySelector("#balance-amount").innerText);

var updateDiposit = document.querySelector("#diposit-amount");
var updateWithdraw = document.querySelector("#withdraw-amount");
var updateBalance = document.querySelector("#balance-amount");
//find diposit, withdraw button
var dipositBtn = document.querySelector("#diposit-btn");
var withdrawBtn = document.querySelector("#withdraw-btn");

// event listener for dipositBtn
var dipositInput = document.querySelector("#dipositAmount");
dipositBtn.addEventListener("click",()=>{
    if(dipositInput.value != '' && dipositInput.value>0){// is the input is NuN?
        var diposit = parseFloat(dipositInput.value);
        dipositAmount += diposit;
        balanceAmount +=diposit;
        updateData();    
        dipositInput.value = '';
    }else{
        dipositInput.value = '';
    }
});

// event listener for withdrawBtn
var withdrawInput = document.querySelector("#withdrawAmount");
withdrawBtn.addEventListener("click",()=>{
    if((withdrawInput.value != '') && (withdrawInput.value>0)){ // is the input is NuN?
        var withdraw = parseFloat(withdrawInput.value); 
        if(withdraw>balanceAmount){
            alert(`You have ৳${balanceAmount} only. Try to withdraw less then it.`)
            }else{
                withdrawAmount += withdraw;
                balanceAmount -= withdraw;
                updateData();
            }
            withdrawInput.value = '';
        }else{
            withdrawInput.value = '';
        }
});

updateData = ()=>{
    updateDiposit.innerText = dipositAmount;
    updateWithdraw.innerText = withdrawAmount;
    updateBalance.innerText = balanceAmount;
}