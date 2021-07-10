const myImage=document.querySelector('img.guitar');

myImage.onclick=function(){
    const mySrc=myImage.getAttribute('src');
    if(mySrc=='images/music_guitar_boroboro.png'){
    myImage.setAttribute('src', 'images/music_guitar_broken.png');
    } else {
        myImage.setAttribute('src', 'images/music_guitar_boroboro.png');
    }
}