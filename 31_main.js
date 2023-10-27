const titleElement=document.querySelector('#title');
titleElement.addEventListener('mouseover', ()=>{
    titleElement.style.color="  rgb(140, 0, 255)";
});

const  unList=document.querySelector('ul');
const  listElement=document.querySelector('#agile');
unList.removeChild(listElement);