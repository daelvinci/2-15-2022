btn.onclick= (() =>{
    let btn=document.getElementById('btn')
    let summary=Number(document.getElementById('summary').value)
    let percentage=Number(document.getElementById('percentage').value)
    let time=Number(document.getElementById('time').value)
    let sum=summary+(time*(summary*(percentage/time)/100))
    document.getElementById("sum").value=`  Umumi odenilecek mebleg: ${sum}`;
    document.getElementById('monthlyAmount').value=`  Ayliq odenis: ${(summary/12).toFixed(2)}`;
})







