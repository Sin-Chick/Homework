
{
    document.getElementById("bi1").onmouseover = function()
    {
        document.getElementById("bo1").classList.add("shining");
        document.getElementById("dis").innerHTML=
        '简介：<br>中国专业IT社区CSDN (Chinese Software Developer Network) 创立于1999年，致力于为中国软件开发者提供知识传播、在线学习、职业发展等全生命周期服务。<br>网址：<br>https://www.csdn.net/';
    }
    document.getElementById("bi1").onmouseout = function()
    {
        document.getElementById("bo1").classList.remove("shining");
        document.getElementById("dis").innerHTML='';
    }
    document.getElementById("bi1").onclick = function()
    {
        window.open("https://www.csdn.net/");
    }

    document.getElementById("bi2").onmouseover = function()
    {
        document.getElementById("bo2").classList.add("shining");
        document.getElementById("dis").innerHTML=
        '简介：<br>菜鸟教程提供了最全的的web技术基础教程,介绍了HTML教程、CSS教程、Javascript教程、Python基础教程，PHP教程等各种建站基础。<br>网址：<br>https://www.runoob.com/';
    }
    document.getElementById("bi2").onmouseout = function()
    {
        document.getElementById("bo2").classList.remove("shining");
        document.getElementById("dis").innerHTML='';
    }
    document.getElementById("bi2").onclick = function()
    {
        window.open("https://www.runoob.com/");
    }

    document.getElementById("bi3").onmouseover = function()
    {
        document.getElementById("bo3").classList.add("shining");
        document.getElementById("dis").innerHTML=
        '简介：<br>国外最流行的开源软件托管平台，但对于国内网络环境连接可能不太稳定。<br>网址：<br>https://github.com/';
    }
    document.getElementById("bi3").onmouseout = function()
    {
        document.getElementById("bo3").classList.remove("shining");
        document.getElementById("dis").innerHTML='';
    }
    document.getElementById("bi3").onclick = function()
    {
        window.open("https://github.com/");
    }

    document.getElementById("bi4").onmouseover = function()
    {
        document.getElementById("bo4").classList.add("shining");
        document.getElementById("dis").innerHTML=
        '简介：<br>收录了大量脚本文件，同时提供脚本编程学习资源。<br>网址：<br>https://www.jb51.net/';
    }
    document.getElementById("bi4").onmouseout = function()
    {
        document.getElementById("bo4").classList.remove("shining");
        document.getElementById("dis").innerHTML='';
    }
    document.getElementById("bi4").onclick = function()
    {
        window.open("https://www.jb51.net/");
    }

    document.getElementById("bi5").onmouseover = function()
    {
        document.getElementById("bo5").classList.add("shining");
        document.getElementById("dis").innerHTML=
        '简介：<br>国内可用的搜索引擎之一，广告相对较少，搜索质量尚可。<br>网址：<br>https://cn.bing.com/';
    }
    document.getElementById("bi5").onmouseout = function()
    {
        document.getElementById("bo5").classList.remove("shining");
        document.getElementById("dis").innerHTML='';
    }
    document.getElementById("bi5").onclick = function()
    {
        window.open("https://cn.bing.com/");
    }

    document.getElementById("bi6").onmouseover = function()
    {
        document.getElementById("bo6").classList.add("shining");
        document.getElementById("dis").innerHTML=
        '简介：<br>虽然b站并不是专业的计算机教学网站，但快速搜索一些常用教学视频较为方便。<br>网址：<br>https://www.bilibili.com/';
    }
    document.getElementById("bi6").onmouseout = function()
    {
        document.getElementById("bo6").classList.remove("shining");
        document.getElementById("dis").innerHTML='';
    }
    document.getElementById("bi6").onclick = function()
    {
        window.open("https://www.bilibili.com/");
    }

    document.getElementById("bi7").onmouseover = function()
    {
        document.getElementById("bo7").classList.add("shining");
        document.getElementById("dis").innerHTML=
        '简介：<br>在GitHub无法登录的情况下，可以使用此网站替代，同时全中文界面便于查阅。<br>网址：<br>https://www.githubs.cn/';
    }
    document.getElementById("bi7").onmouseout = function()
    {
        document.getElementById("bo7").classList.remove("shining");
        document.getElementById("dis").innerHTML='';
    }
    document.getElementById("bi7").onclick = function()
    {
        window.open("https://www.githubs.cn/");
    }

    document.getElementById("ri").onmouseover = function()
    {
        document.getElementById("ro").classList.add("shining");
    }
    document.getElementById("ri").onmouseout = function()
    {
        document.getElementById("ro").classList.remove("shining");
    }
    document.getElementById("ri").onclick = function()
    {
        window.location.href="../main.html";
    }
}