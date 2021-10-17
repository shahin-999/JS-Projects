// address book

const personName = document.getElementById('name');
const address = document.getElementById('address');
const phnNumb = document.getElementById('phone-number');
const btn = document.getElementById('btn-add');
const table = document.getElementById('table');

btn.addEventListener('click', (e)=>{
    e.preventDefault(); //for pause the listener

    if(personName.value=='' && address.value=='' && phnNumb.value==''){
        alert("Please fill all the box");
    }else{
    //create new table element
        let newRow = document.createElement("tr");
        let newData1 = document.createElement("td");
        let newData2 = document.createElement("td");
        let newData3 = document.createElement("td");
    // insert value
        newData1.innerHTML = personName.value;
        newData2.innerHTML = address.value;
        newData3.innerHTML = phnNumb.value;
    // marge all the element
        newRow.appendChild(newData1);
        newRow.appendChild(newData2);
        newRow.appendChild(newData3);
    //marge the row on the table
        table.appendChild(newRow);
    }
});