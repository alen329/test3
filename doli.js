var textarea=document.getElementById("text");
var result=document.getElementById("result");
var select=document.getElementById("select");
textarea.addEventListener("input",()=>{
    make_result();
});
select.addEventListener("change",()=>{
    make_result();
});

function make_result(){
    if(select.value=="decode"){
        result.value=atob(textarea.value);
    }else{
        result.value=btoa(textarea.value);
    }
}