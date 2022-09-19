'use strict';

{
    const images = [
        "../img/wataten_icon_011.png",
        "../img/wataten_icon_012.png",
        "../img/wataten_icon_013.png",
        "../img/wataten_icon_015.png",
        "../img/wataten_icon_016.png",
        "../img/wataten_icon_017.png",
    ];

    let currentIndex = 0;

    const mainImage = document.getElementById("main");
    mainImage.src = images[currentIndex];

    images.forEach((image,index)=>{
        const img = document.createElement("img");
        img.src = img;

        const li = document.createElement("li")

        if (index == currentIndex){
            li.classList.add("current");
        }

        li.addEventListener("click", ()=>{
            mainImage.src = image;
            const thumnails = document.querySelectorAll(".thumnails > li");
            thumnails[currentIndex].classList.remove("current");
            currentIndex = index;
            thumnails[currentIndex].classList.add("current");
        });


        li.appendChild(img);
        document.querySelector(".thumnails").appendChild(li);

    });

    const next = document.getElementById("next");
    next.addEventListener("click",()=>{
        let target = currentIndex + 1;
        if (target === images.length){
            target = 0;
        }
        document.querySelectorAll(".thumnails > li")[target].click();
    });

    const prev = document.getElementById("prev");
    prev.addEventListener("click",()=>{
        let target = currentIndex -1;
        if (target == -1){
            target = images.length-1;
        }

        document.querySelectorAll(".thumnails > li")[target].click();
    });

    let timeoutId;

    function playSlideShow(){
        timeoutId = setTimeout(()=>{
            next.click();
            playSlideShow();
        },2000);
    }

    let isPlaying = false;

    const play = document.getElementById("play");
    play.addEventListener("click",()=>{
        if(isPlaying === false){
            playSlideShow();
            play.textContent = "停止"
        }else {
            clearTimeout(timeoutId);
            play.textContent = "再生"
        }
        isPlaying = !isPlaying;

    });
};
    