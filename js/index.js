// //音乐开关
// (function(){
//     var btn_music = document.getElementById("body").querySelectorAll(".gw-header .header-l .btn")[0];
//     var audio = document.createElement('audio');
//     audio.src = "audio/56fdba87fd0c82dedba263013f8692ba.mp3"//这里放音乐的地址
//     audio.autoplay = "autoplay";
//     audio.loop = "loop";
//     // audio.play();
//     document.body.appendChild(audio)
   
//     btn_music.mark = true;
//     btn_music.onclick = function(){
//         console.log(1);
//         this.classList.toggle("off",true)
//         this.mark = !this.mark;
//     }
    
// })()

//侧边栏人物轮播
(function(){
    var sideBar = document.getElementById("sideBar"),
        aList = sideBar.getElementsByTagName("a"),
        figure_img = document.getElementById("job").querySelectorAll(".figure .figure-bg"),
        index = 0;
        
    for (var i = 0; i < aList.length; i++) {
        aList[i].index = i;
        aList[i].onclick = function(){
            aList[index].classList.remove("active");
            figure_img[index].classList.remove("active");
            index = this.index;
            aList[index].classList.add("active");
            figure_img[index].classList.add("active");
        }
    }
    //自动轮播
    var timer = function(){
        aList[index].classList.toggle("leave",false)
        aList[index].classList.remove("active");
        figure_img[index].classList.remove("active");
        index++;
        
        if (index >= aList.length) {
            index = 0;
        }
        aList[index].classList.add("active");
        figure_img[index].classList.add("active");

    }
    var Banner = setInterval(timer,2000)
    for (var i = 0; i < aList.length; i++) {
        figure_img[i].onmouseenter = function(){
            clearInterval(Banner);
        }
        aList[i].onmouseenter = function(){
            clearInterval(Banner);
        }
        figure_img[i].onmouseleave = function(){
            Banner = setInterval(timer,2000)
        }
    }   
})()