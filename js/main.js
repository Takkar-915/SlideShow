'use strict';

{
    const images = [
        "C:\\javascript\\slideShow\\img\\画像1.png",
        "C:\\javascript\\slideShow\\img\\画像2.png",
        "C:\\javascript\\slideShow\\img\\画像3.png",
        "C:\\javascript\\slideShow\\img\\画像4.png",
        "C:\\javascript\\slideShow\\img\\画像5.png",
        "C:\\javascript\\slideShow\\img\\画像6.png",
    ];

    let currentIndex = 0;

    const mainImage = document.getElementById("main");
    mainImage.src = images[currentIndex];

    images.forEach((image,index)=>{
        const img = document.createElement("img");
        img.src = image;

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
        },1000);
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
    