
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
    
       totalamounts("current-blance",adddeposit);
       totalamounts("current-deposit",adddeposit);
         document.getElementById('depositAmount').value = "";
      
})

function totalamounts (id,adddeposit){
    let blances=document.getElementById(id).innerText;
    let addblances = parseFloat(blances);
    let totalblance = adddeposit+addblances;

    document.getElementById(id).innerText =totalblance;
}

