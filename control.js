let songIndex=0;
let audioElement=new Audio('music/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressbar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItems'));
let music=[
    {songName:"Tere te", filePath: "music/1.mp3",coverPath:"cover/size_l.jpg" },
    {songName:"All Aces", filePath: "music/2.mp3",coverPath:"cover/prem.jpg"},
    {songName:"Desire", filePath: "music/3.mp3",coverPath:"cover/size_l.jpg"},
    {songName:"Excuse", filePath: "music/4.mp3",coverPath:"cover/Excuses.jpg"},
    {songName:"Majhail", filePath: "music/5.mp3",coverPath:"cover/Majhail.jpg"},
    {songName:"Space", filePath: "music/6.mp3",coverPath:"cover/size_l.jpg"},
    {songName:"Takover", filePath: "music/7.mp3",coverPath:"cover/Takeover.jpg"},
]

// console.log(songItems);
songItems.forEach((element, i)=>{
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=music[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=music[i].songName;
    // element.getElementsByClassName('timestamp')[0].innerText=parseFloat(audioElement.duration/60).toFixed(2);
   

    // element.getElementsByClassName('songName')[0].src=music[i].filePath;

    // element.getElementsByTagName('img')[0].src=songs[i].coverPath;
})


// audioElement.play();
// handle play/pause click;

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0; 
    }
})
// listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeUpdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    
   
    // myProgressBar.value=progress;
    // console.log(progress);
    //  console.log(myProgressBar.value);
    

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`music/${songIndex+1}.mp3`;
        // console.log(`music/${songIndex+1}.mp3`);
        masterSongName.innerText = music[songIndex].songName;
        // console.log(masterSongName.innerText)
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = music[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    // console.log(audioElement.src);
    masterSongName.innerText = music[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
