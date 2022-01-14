{
    document.getElementById("bi1").onmouseover = function()
    {
        document.getElementById("bo1").classList.add("showing");
        document.getElementById("dis").innerHTML=
        '在过去的大一一年中，我渐渐地把握了学习与生活的平衡，适应了大学生活，并为之后的大学学习打下了坚实的基础。';
        document.getElementById("dis").innerHTML+=
        '同时，我也开始对大学有了更为深刻地了解，知道了大学学习对自主性的需求。与此同时，我还根据兴趣加入了相应的社团，';
        document.getElementById("dis").innerHTML+=
        '扩张自身的能力领域。当然，我也有过热情减退，积极性降低的时候，但也最终调整了过来。';
    }
    document.getElementById("bi1").onmouseout = function()
    {
        document.getElementById("bo1").classList.remove("showing");
        document.getElementById("dis").innerHTML='';
    }

    document.getElementById("bi2").onmouseover = function()
    {
        document.getElementById("bo2").classList.add("showing");
        document.getElementById("dis").innerHTML=
        '大二时期，我的打算是主攻学业，强化自身专业知识素养，拓宽知识面；并通过一些实践活动，提高自身的沟通能力，创新能力与实践能力。';
        document.getElementById("dis").innerHTML+=
        '同时，我也计划在大二完成社会实践指标，以便之后的安排。';
    }
    document.getElementById("bi2").onmouseout = function()
    {
        document.getElementById("bo2").classList.remove("showing");
        document.getElementById("dis").innerHTML='';
    }

    document.getElementById("bi3").onmouseover = function()
    {
        document.getElementById("bo3").classList.add("showing");
        document.getElementById("dis").innerHTML=
        '大三时期，我将找准我的专业主攻方向，明确职业规划，并结合网络全面了解理想职业相关信息，开始着重培养自身实践能力。';
        document.getElementById("dis").innerHTML+=
        '同时，在大三后半段也将开始着手复习，准备考研。';
    }
    document.getElementById("bi3").onmouseout = function()
    {
        document.getElementById("bo3").classList.remove("showing");
        document.getElementById("dis").innerHTML='';
    }

    document.getElementById("bi4").onmouseover = function()
    {
        document.getElementById("bo4").classList.add("showing");
        document.getElementById("dis").innerHTML=
        '大四时期，开始全面复习备考，为考研做筹备，同时也开始寻找一系列实习机会，提高自身工作能力与实践能力。';
        document.getElementById("dis").innerHTML+=
        '并且根据自身情况有选择性地考取一些证件，以备使用。';
    }
    document.getElementById("bi4").onmouseout = function()
    {
        document.getElementById("bo4").classList.remove("showing");
        document.getElementById("dis").innerHTML='';
    }

    document.getElementById("ri").onmouseover = function()
    {
        document.getElementById("ro").classList.add("shining");
    }
    document.getElementById("ri").onmouseout = function()
    {
        document.getElementById("ro").classList.remove("shining");
        document.getElementById("ri").innerHTML='返回';
    }
    document.getElementById("ri").onclick = function()
    {
        window.location.href="../main.html";
    }
}