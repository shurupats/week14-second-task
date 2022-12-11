function changeColor(container){
    let color = getColor();
    container.style.backgroundColor = color;
}

function getColor(){
    let color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    return color;
}