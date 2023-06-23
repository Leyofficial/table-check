const ul = document.querySelectorAll('ul>li>span');
document.querySelector('table').onclick = function(event){
    if (event.target.tagName !== 'TD'){
        return;
    }

    let data = [...event.target.parentNode.children];
    let text = getDataFromTD(data);
    outText(text)
}


function getDataFromTD(tdArray){
   return tdArray.map(item => item.textContent);
}

function outText(text){
    text.forEach((item,index) => ul[index].textContent = item);
}