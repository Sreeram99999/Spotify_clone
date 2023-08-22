let songindex=0;
let audioelement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let icon=document.getElementById('icon');
let songitems=Array.from(document.getElementsByClassName("songitems"));
let songs = [
    {songname:"apna bane piya",filepath:'songs/1.mp3',coverpath:'cover/1.jpg'},
    {songname:"hukum",filepath:'songs/2.mp3',coverpath:'cover/2.jpg'},
    {songname:"kothaga",filepath:'songs/3.mp3',coverpath:'cover/3.jpg'},
    {songname:"manasavacha",filepath:'songs/4.mp3',coverpath:'cover/4.jpg'},
    {songname:"naa cheli roja",filepath:'songs/5.mp3',coverpath:'cover/5.jpg'},
    {songname:"orugalluke",filepath:'songs/6.mp3',coverpath:'cover/6.jpg'},
    {songname:"adhey nannu",filepath:'songs/7.mp3',coverpath:'cover/7.jpg'},
    {songname:"adharaku",filepath:'songs/8.mp3',coverpath:'cover/8.jpg'}
]
songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;

})
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        icon.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        icon.style.opacity=0;
    }
})
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value=progress;

})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100 ;
})