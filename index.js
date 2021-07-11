
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
    let blance=document.getElementById(id).innerText;
    let addblances = parseFloat(blance);
    let totalblance = adddeposit+addblances;

    document.getElementById(id).innerText =totalblance;
}

function getInput(){
  let withdrAwamount = document.getElementById('withdrawAmount').value;
  let addvalue = parseFloat(withdrAwamount);
  return addvalue;
}

let btn1 = document.getElementById("button");
btn1.addEventListener('click',function(){
 let withdrawAmount= getInput('withdrawAmount');
 totalamounts("current-withdraw",withdrawAmount);
 totalamounts("current-blance",-1 * withdrawAmount);
 document.getElementById("withdrawAmount").value="";
 
})
  
