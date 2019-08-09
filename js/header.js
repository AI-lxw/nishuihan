//顶部轮播
(function(){
    var Top_bar = document.getElementById("top-bar"),
        Top_barConfig = {
            List: [{
                link : "http://u.163.com/gamerkwzl",
                value : "领取网易严选宝箱"
            },{
                link : "http://rd.da.netease.com/redirect?t=zPJ3p1rAsE&p=MmVZMh&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2Factivity%2Fdetail%2F11835.shtml%3Ftag%3D7cc46fc8c91a33ec9aa62298347b4ede",
                value : "游戏充值9.8折"
            }]
        };
    var i = 0;
    Top_bar.href = Top_barConfig.List[i].link;
    Top_bar.innerHTML = Top_barConfig.List[i].value;
    setInterval(function(){
        Top_bar.className = "fadeUp";
        i++;
        i = i % Top_barConfig.List.length;
        setTimeout(function(){
            Top_bar.href = Top_barConfig.List[i].link;
            Top_bar.innerHTML = Top_barConfig.List[i].value;
            Top_bar.className = "none"
            setTimeout(function(){
                Top_bar.className = "fadeUp2";
            },12)
        },500)
    },3000)
})()

