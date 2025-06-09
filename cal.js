const ans=document.getElementById('ans');
function no(input){
    ans.value+=input;
}
function cal(){
    ans.value=eval(ans.value);
}
function AC(){
    ans.value="";

}