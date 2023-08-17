function judada(){
    window.location="proje1.html";
}
function tronexmw(){
    window.location="proje2.html";
}
function limsey(){
    window.location="proje3.html";
}
function donice(){
    window.location="proje4.html";
}
function verianics(){
    window.location="proje5.html";
}
function ogkeed(){
    window.location="proje6.html";
}
function ogmarlian(){
    window.location="proje8.html";
}
function boixward(){
    window.location="proje9.html";
}
function freshnikka(){
    window.location="proje10.html";
}
function justice(){
    window.location="proje11.html";
}
function kweezan(){
    window.location="proje12.html";
}
function snuggle(){
    window.location="proje7.html";
}
function search(){
    let filter=document.getElementById('find').value.toUpperCase();
    let item =document.querySelectorAll('.name');
    let c = document.getElementsByTagName('p');
    for(var i=0; i<=c.length; i++){
        let a = item[i].getElementsByTagName('p')[0];
        let value = a.innerHTML || a.innerText ||a.textContent;
        if(value.toUpperCase().indexOf(filter) > -1){
            item[i].style.display="";
        }
        else{
            item[i].style.display="none";
        }
    }
}
