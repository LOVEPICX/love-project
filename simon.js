let gameseq=[];
let userseq=[];
let btns=["red","yellow","green","purple"];

let start=false;
let level= 0;
let highscore=0;
let h2=document.querySelector("h3");
let high=document.querySelector("#h");

document.addEventListener("keypress" ,function() {
  if(start==false){
    console.log("game start");
    start=true;
    levelup();
  }  

});

function gameflesh(btn){
    btn.classList.add("flesh");

 setTimeout(function() {
    btn.classList.remove("flesh");
 },290)
}

function userflesh(btn){
    btn.classList.add("userflesh");

 setTimeout(function() {
    btn.classList.remove("userflesh");
 },200)
}

function levelup() {
    userseq=[];
    level++;
    h2.innerText=`LEVEL ${level}`;

    let randix=Math.floor(Math.random()*3);
    let randcol=btns[randix];
    let randbtn=document.querySelector(`.${randcol}`)

    gameseq.push(randcol);
    gameflesh(randbtn);
}

function checkans(idx){

 if(gameseq[idx]===userseq[idx]){
   if(gameseq.length==userseq.length){
      setTimeout(levelup,1000);
   }
 } else{
    h2.innerHTML=`Game over! <b>your score was"${level}"</b> <br>press any key to try again!!`;
    if(level>highscore){
       highscore=level;
      high.innerHTML=`${level}`;
    }
         document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="";
    },200)
    reset();
 }
}

function btnpress(){
   let btn=this;
   userflesh(btn);
   usercol=btn.getAttribute("id"); 
   userseq.push(usercol);

   checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
   btn.addEventListener("click",btnpress)
}

function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}

