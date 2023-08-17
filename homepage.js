const categorytitle=document.querySelectorAll('.category-title');
const allcategoryposts=document.querySelectorAll('.all');
for(let i =0; i<categorytitle.length; i++){
     categorytitle[i].addEventListener('click',filterposts.bind(this, categorytitle[i]));
}

function filterposts(item){
    changeactiveposition(item);
    for(let i=0; i<allcategoryposts.length; i++){
         if(allcategoryposts[i].classList.contains(item.attributes.id.value)){
            allcategoryposts[i].style.display="block";

         }else{
            allcategoryposts[i].style.display="none";
         }
    }
}
function changeactiveposition(activeitem){
for(let i=0; i<categorytitle.length; i++){
    categorytitle[i].classList.remove('active');
}
activeitem.classList.add('active');
}