let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dratini.gif') {
        myImage.setAttribute('src','images/totodile.gif');
    } else {
        myImage.setAttribute('src','images/dratini.gif');
    }
}                                                      