
/*Dom selector*/
let hide = document.querySelector('.bank-parent');
let newpage = document.querySelector('.new-page');
let call =document.querySelector('#hide');



call.addEventListener('click',function(){
    hide.style.display ="none";
    newpage.style.display ="block";
  })

let btn2 = document.getElementById('button-2');
    btn2.addEventListener('click',function(){
        let depositamount = document.getElementById('depositAmount').value;
        let adddeposit = parseFloat(depositamount);
    
        let currentdeposit = document.getElementById('current-deposit').innerText;
        let addcurrentdeposit = parseFloat(currentdeposit);
        let totaldeposit = adddeposit + addcurrentdeposit;
       document.getElementById('current-deposit').innerText = totaldeposit;
       document.getElementById('depositAmount').value = "";
      
})

