// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    const beginBtn = document.getElementById("beginBtn");

    if(beginBtn){

        beginBtn.addEventListener("click",()=>{

            document.body.style.transition="opacity 1s";

            document.body.style.opacity="0";

            setTimeout(()=>{

                window.location.href="pages/password.html";

            },1000);

        });

    }

});
/* ===========================
PASSWORD PAGE
=========================== */

let attempts = 0;

function checkPassword(){

    const password = document.getElementById("password");
    const error = document.getElementById("error");

    if(!password) return;

    if(password.value === "11042026"){

        error.style.color="#9cffb2";
        error.innerHTML="❤️ I knew you'd remember...";

        setTimeout(()=>{
            window.location.href="letter.html";
        },1800);

        return;
    }

    attempts++;

    error.style.color="#ffd1d1";

    if(attempts===1){

        error.innerHTML="😒 Wrong! I thought you'd know this one without even thinking. Try again...";

    }

    else if(attempts===2){

        error.innerHTML="😤 Seriously?? You're making your girlfriend wait! Think twice, Babu. ❤️";

    }

    else{

        error.innerHTML=`
            😠 That's it! I'm officially upset.<br><br>
            You forgot our special date... 😭<br><br>

            <a href="tel:+919002123257">
                <button style="
                    margin-top:15px;
                    background:#ff4f8b;
                    color:white;
                    border:none;
                    padding:12px 28px;
                    border-radius:40px;
                    cursor:pointer;
                ">
                    📞 Call Me Right Now
                </button>
            </a>
        `;

    }

    password.value="";
}
// ===============================
// HEART PAGE
// ===============================

const secrets = [
{
title:"❤️ A Little Secret...",
text:"You make my ordinary days feel special."
},
{
title:"❤️ Another Secret...",
text:"Your smile is my favorite view."
},
{
title:"❤️ Just One More...",
text:"You always make me feel safe."
},
{
title:"❤️ Here's Another...",
text:"Every notification from you makes my day."
},
{
title:"❤️ Almost There...",
text:"No matter where we are...\n\nYou're my home."
},
{
title:"❤️ My Biggest Secret...",
text:"The reason I love you the most...\n\nis simply because\n\nYOU are YOU. ❤️"
}
];

const heart = document.getElementById("mainHeart");
const title = document.getElementById("secretTitle");
const text = document.getElementById("secretText");
const finalBtn = document.getElementById("finalBtn");

let index = 0;

if(heart){

heart.addEventListener("click",()=>{

if(index < secrets.length){

title.style.opacity=0;
text.style.opacity=0;

setTimeout(()=>{

title.innerHTML=secrets[index].title;
text.innerHTML=secrets[index].text.replace(/\n/g,"<br>");

title.style.opacity=1;
text.style.opacity=1;

},250);

heart.style.transform=`scale(${1 + index*0.08})`;

heart.style.filter=`drop-shadow(0 0 ${15+index*8}px hotpink)`;

createSparkles();

index++;

}

if(index===secrets.length){

setTimeout(()=>{

title.innerHTML="❤️ Congratulations! ❤️";

text.innerHTML=
"You unlocked my whole heart.<br><br>Every secret leads back to you. ❤️";

heart.style.transform="scale(1.7)";
heart.style.filter="drop-shadow(0 0 45px deeppink)";

launchConfetti();

finalBtn.classList.add("show");

},700);

}

});

}


// ===============================
// Sparkles
// ===============================

function createSparkles(){

for(let i=0;i<8;i++){

let sparkle=document.createElement("span");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";
sparkle.style.left=(window.innerWidth/2-40+Math.random()*80)+"px";
sparkle.style.top=(window.innerHeight/2-40+Math.random()*80)+"px";
sparkle.style.fontSize=(18+Math.random()*18)+"px";
sparkle.style.pointerEvents="none";
sparkle.style.transition="1s";
sparkle.style.zIndex="999";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.style.transform=
`translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;

sparkle.style.opacity=0;

},50);

setTimeout(()=>{

sparkle.remove();

},1000);

}

}


// ===============================
// Confetti
// ===============================

function launchConfetti(){

for(let i=0;i<120;i++){

let piece=document.createElement("div");

piece.style.position="fixed";
piece.style.top="-20px";
piece.style.left=Math.random()*100+"vw";
piece.style.width="8px";
piece.style.height="14px";
piece.style.borderRadius="4px";

const colors=[
"#ff4f8b",
"#ff9ec7",
"#ffd166",
"#ffffff",
"#ff6fae"
];

piece.style.background=
colors[Math.floor(Math.random()*colors.length)];

piece.style.opacity=.9;
piece.style.zIndex="999";

document.body.appendChild(piece);

let duration=3000+Math.random()*2000;

piece.animate(

[
{
transform:"translateY(0) rotate(0deg)"
},
{
transform:`translateY(${window.innerHeight+100}px) rotate(${720+Math.random()*360}deg)`
}
],

{
duration:duration,
easing:"linear"
}

);

setTimeout(()=>{

piece.remove();

},duration);

}

}