function changeColor(container){
    let color = getColor();
    container.style.backgroundColor = color;
}

function getColor(){
    /*let color = Math.round(255.0*Math.random());
    let r = color.toString(16);
    color = Math.round(255.0*Math.random());
    let g=color.toString(16);
    color = Math.round(255.0*Math.random());
    let d=color.toString(16);
    color=r+g+d;
    return color;*/
    let color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    return color;
}