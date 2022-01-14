{
    document.getElementById("bi1").onmouseover = function()
    {
        document.getElementById("bo1").classList.add("shining");
        document.getElementById("dis").innerHTML=
        '计算机学科主要有程序设计基础、高等数学以及以此为基础学习的一系列课程，本章将会介绍相关课程的关系。';
    }
    document.getElementById("bi1").onmouseout = function()
    {
        document.getElementById("bo1").classList.remove("shining");
        document.getElementById("dis").innerHTML='';
    }
    document.getElementById("bi1").onclick = function()
    {
        window.location.href="./html/Q1.html";
    }

    document.getElementById("bi2").onmouseover = function()
    {
        document.getElementById("bo2").classList.add("shining");
        document.getElementById("dis").innerHTML='参考资料在学习计算机的过程中不可或缺，本章将介绍计算机各学科可能用到的参考资料来源。';
    }
    document.getElementById("bi2").onmouseout = function()
    {
        document.getElementById("bo2").classList.remove("shining");
        document.getElementById("dis").innerHTML='';
    }
    document.getElementById("bi2").onclick = function()
    {
        window.location.href="./html/Q2.html";
    }

    document.getElementById("bi3").onmouseover = function()
    {
        document.getElementById("bo3").classList.add("shining");
        document.getElementById("dis").innerHTML='计算机的发明可以说是具有划时代意义的里程碑，本章将简介笔者对计算机的认识。';
    }
    document.getElementById("bi3").onmouseout = function()
    {
        document.getElementById("bo3").classList.remove("shining");
        document.getElementById("dis").innerHTML='';
    }
    document.getElementById("bi3").onclick = function()
    {
        window.location.href="./html/Q3.html";
    }

    document.getElementById("bi4").onmouseover = function()
    {
        document.getElementById("bo4").classList.add("shining");
        document.getElementById("dis").innerHTML='本章将简介笔者的学业规划情况，以供参考。';
    }
    document.getElementById("bi4").onmouseout = function()
    {
        document.getElementById("bo4").classList.remove("shining");
        document.getElementById("dis").innerHTML='';
    }
    document.getElementById("bi4").onclick = function()
    {
        window.location.href="./html/Q4.html";
    }
    document.getElementById("ri").onmouseover = function()
    {
        document.getElementById("ro4").classList.add("shining");
        document.getElementById("ris").innerHTML='返回';
    }
    document.getElementById("ri4").onmouseout = function()
    {
        document.getElementById("ro4").classList.remove("shining");
        document.getElementById("ris").innerHTML='';
    }
    document.getElementById("ri4").onclick = function()
    {
        window.location.href="../main.html";
    }
}